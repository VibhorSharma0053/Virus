import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  studentEmail: { type: String, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
}, { timestamps: true });

const Result = mongoose.model("Result", resultSchema);
export default Result;
