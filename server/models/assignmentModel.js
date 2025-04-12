import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: String,
  optionA:String,
  optionB:String,
  optionC:String,
  optionD:String,
  correctAnswer: String
});

const assignmentSchema = new mongoose.Schema({
  creatorEmail: { type: String, required: true },
  testTitle: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  totalMarks: { type: Number, required: true },
  allowedTime: { type: Number, required: true }, // in minutes
  questions: [questionSchema]
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;