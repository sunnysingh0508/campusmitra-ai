import type { NextAuthConfig } from 'next-auth';

const protectedRoutes = [
    '/dashboard',
    '/cgpa-predictor',
    '/attendance',
    '/bunk-calculator',
    '/assignments',
    '/notes',
    '/timetable',
    '/analytics',
    '/settings',
    '/profile',
];

export const authConfig = {
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isNewUser = (auth?.user as any)?.isNewUser;
            const pathname = nextUrl.pathname;

            const isProtected = protectedRoutes.some((route) =>
                pathname.startsWith(route)
            );
            const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');

            if (isProtected) {
                if (!isLoggedIn) return false; // Redirect unauthenticated users to /login
                if (isNewUser && !pathname.startsWith('/onboarding')) {
                    return Response.redirect(new URL('/onboarding', nextUrl));
                }
                return true;
            }

            if (isAuthRoute && isLoggedIn) {
                // Redirect authenticated users away from /login or /signup
                const destination = isNewUser ? '/onboarding' : '/dashboard';
                return Response.redirect(new URL(destination, nextUrl));
            }

            return true;
        },
        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                (session.user as any).isNewUser = token.isNewUser;
            }
            return session;
        },
        jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                if ((user as any).isNewUser !== undefined) {
                    token.isNewUser = (user as any).isNewUser;
                }
            }
            return token;
        },
    },
    providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
