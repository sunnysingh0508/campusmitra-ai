import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import type { User as NextAuthUser } from 'next-auth';

interface ExtendedUser extends NextAuthUser {
    id: string;
    isNewUser?: boolean;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "select_account",
                    access_type: "offline",
                    response_type: "code",
                    scope: "openid profile email", // Basic user info only - no Google Calendar scope
                },
            },
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const email = (credentials.email as string).toLowerCase();
                const password = credentials.password as string;

                try {
                    await dbConnect();
                    const dbUser = await User.findOne({ email }).select('+password');
                    if (!dbUser || !dbUser.password) {
                        return null;
                    }
                    const isPasswordValid = await bcrypt.compare(password, dbUser.password);
                    if (!isPasswordValid) {
                        return null;
                    }
                    return {
                        id: dbUser._id.toString(),
                        name: dbUser.name,
                        email: dbUser.email,
                        image: dbUser.image || '',
                        isNewUser: !dbUser.isOnboarded,
                    };
                } catch (error) {
                    console.error('Credentials authorize error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        ...authConfig.callbacks,
        async signIn({ user, account }) {
            if (account?.provider === 'google') {
                if (!user.email) return false;
                try {
                    await dbConnect();
                    let dbUser = await User.findOne({ email: user.email.toLowerCase() });

                    if (!dbUser) {
                        // New user: register in database
                        dbUser = await User.create({
                            name: user.name || 'Student',
                            email: user.email.toLowerCase(),
                            image: user.image || '',
                            googleId: account.providerAccountId,
                            isOnboarded: false,
                            lastLogin: new Date(),
                        });
                        (user as any).isNewUser = true;
                        user.id = dbUser._id.toString();
                    } else {
                        // Existing user: update login timestamp and avatar
                        dbUser.lastLogin = new Date();
                        if (user.image && dbUser.image !== user.image) {
                            dbUser.image = user.image;
                        }
                        if (account.providerAccountId && !dbUser.googleId) {
                            dbUser.googleId = account.providerAccountId;
                        }
                        await dbUser.save();
                        (user as any).isNewUser = !dbUser.isOnboarded;
                        user.id = dbUser._id.toString();
                    }
                    return true;
                } catch (error) {
                    console.error('Error handling Google OAuth sign in:', error);
                    return true;
                }
            }
            return true;
        },
    },
});
