import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAssignment extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    subject: string;
    dueDate: Date;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Pending' | 'In Progress' | 'Completed';
    progress: number;
    createdAt: Date;
    updatedAt: Date;
}

const AssignmentSchema: Schema<IAssignment> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        subject: {
            type: String,
            required: [true, 'Subject is required'],
        },
        dueDate: {
            type: Date,
            required: [true, 'Due date is required'],
        },
        priority: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            default: 'Medium',
        },
        status: {
            type: String,
            enum: ['Pending', 'In Progress', 'Completed'],
            default: 'Pending',
        },
        progress: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    },
    {
        timestamps: true,
    }
);

const Assignment: Model<IAssignment> =
    mongoose.models.Assignment || mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default Assignment;
