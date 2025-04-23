import Result from "../models/Result.js";

export const submitResult = async (req, res) => {
  try {
    const { studentEmail, testId, startTime, endTime, totalMarks } = req.body;

    if (!studentEmail || !testId || !startTime || !endTime || totalMarks == null) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const result = new Result({
      studentEmail,
      testId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      totalMarks,
    });

    await result.save();

    res.status(201).json({ message: "Result stored successfully", result });
  } catch (err) {
    console.error("Error storing result:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
