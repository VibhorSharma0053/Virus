import Assignment from "../models/assignmentModel.js";

export const assignmentCreate = async (req, res) => {
  const {
    creatorEmail,
    testTitle,
    totalMarks,
    allowedTime,
    questions
  } = req.body;

  try {
    const a=Date.now();
    const newAssignment = new Assignment({
      creatorEmail,
      testTitle,
      a,
      totalMarks,
      allowedTime,
      questions
    });

    await newAssignment.save();
    res.status(201).json({ message: "Assignment created", assignment: newAssignment });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAssignmentsByCreator = async (req, res) => {
    const { creatorEmail } = req.body;
  
    try {
      const assignments = await Assignment.find({ creatorEmail });
      res.status(200).json(assignments);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};