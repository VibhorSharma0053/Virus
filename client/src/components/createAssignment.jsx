import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherAssignmentCreation = (props) => {
  const [testTitle, setTestTitle] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [allowedTime, setAllowedTime] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    },
  ]);
  const [creatorEmail] = useState("teacher@example.com"); // Or get it from session/localStorage
  const navigate = useNavigate();

  const handleQuestionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][event.target.name] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const assignmentData = {
      creatorEmail,
      testTitle,
      totalMarks: Number(totalMarks),
      allowedTime: Number(allowedTime),
      questions,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/assignment/post",
        assignmentData
      );
      console.log(response.data);
      navigate("/teacher"); // Navigate to a page with the list of assignments or confirmation
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg">Test Title</label>
          <input
            type="text"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg">Total Marks</label>
          <input
            type="number"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg">Allowed Time (in minutes)</label>
          <input
            type="number"
            value={allowedTime}
            onChange={(e) => setAllowedTime(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <h3 className="text-lg font-semibold mb-2">Questions</h3>

        {questions.map((question, index) => (
          <div key={index} className="mb-4 border p-4 rounded shadow">
            <div>
              <label className="block">Question Text</label>
              <input
                type="text"
                name="questionText"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mt-2">
              <label className="block">Option A</label>
              <input
                type="text"
                name="optionA"
                value={question.optionA}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mt-2">
              <label className="block">Option B</label>
              <input
                type="text"
                name="optionB"
                value={question.optionB}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mt-2">
              <label className="block">Option C</label>
              <input
                type="text"
                name="optionC"
                value={question.optionC}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mt-2">
              <label className="block">Option D</label>
              <input
                type="text"
                name="optionD"
                value={question.optionD}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mt-2">
              <label className="block">Correct Answer</label>
              <input
                type="text"
                name="correctAnswer"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(index, e)}
                className="border p-2 w-full"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
            >
              Remove Question
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addQuestion}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Add Question
        </button>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Create Assignment
          </button>
          <button
            onClick={props.close}
            className="mt-4 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-50 active:bg-red-100 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherAssignmentCreation;
