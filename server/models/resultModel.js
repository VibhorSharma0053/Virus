import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  selectedOption: String
});

const resultSchema = new mongoose.Schema({
  studentEmail: { type: String, required: true },
  startTimestamp: { type: Date, required: true },
  submissionTimestamp: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
  answers: [answerSchema]
});

const Result = mongoose.model("Result", resultSchema);

export default Result;