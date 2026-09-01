import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAttendance extends Document {
    userId: mongoose.Types.ObjectId;
    subject: string;
    attendedClasses: number;
    totalClasses: number;
    createdAt: Date;
    updatedAt: Date;
}

const AttendanceSchema: Schema<IAttendance> = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        subject: {
            type: String,
            required: [true, 'Subject name is required'],
        },
        attendedClasses: {
            type: Number,
            default: 0,
            min: 0,
        },
        totalClasses: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

AttendanceSchema.index({ userId: 1, subject: 1 }, { unique: true });

const Attendance: Model<IAttendance> =
    mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', AttendanceSchema);

export default Attendance;
