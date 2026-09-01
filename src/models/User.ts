import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    image?: string;
    googleId?: string;
    cgpa?: number;
    isOnboarded?: boolean;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: false,
            select: false,
        },
        image: {
            type: String,
            default: '',
        },
        googleId: {
            type: String,
            default: '',
        },
        cgpa: {
            type: Number,
            default: 0,
        },
        isOnboarded: {
            type: Boolean,
            default: false,
        },
        lastLogin: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
