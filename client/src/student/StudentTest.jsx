import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentTest = () => {
  const studentEmail = localStorage.getItem("userEmail") || "Student";
  const [assignments, setAssignments] = useState([]);
  const [currentTest, setCurrentTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [questionStatus, setQuestionStatus] = useState({});
  const navigate = useNavigate();

  // Fetch assignments
  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await axios.post("http://localhost:3000/api/assignment/getAll");
      setAssignments(res.data);
    };
    fetchAssignments();
  }, []);

  // Timer countdown
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0 && currentTest) {
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [timer, currentTest]);

  const startTest = (test) => {
    setCurrentTest(test);
    setStartTime(new Date());
    setTimer(test.allowedTime * 60);
    setCurrentQuestionIndex(0);
    setAnswers({});

    // Initialize status
    const status = {};
    test.questions.forEach((q, index) => {
      status[index] = "unvisited";
    });
    status[0] = "visited";
    setQuestionStatus(status);
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    const updated = { ...questionStatus };
    updated[currentQuestionIndex] = "answered";
    setQuestionStatus(updated);
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setQuestionStatus((prev) => ({
      ...prev,
      [index]: prev[index] === "unvisited" ? "visited" : prev[index],
    }));
  };

  const handleSubmit = async () => {
    const endTime = new Date();
    let score = 0;

    currentTest.questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) {
        score += currentTest.totalMarks / currentTest.questions.length;
      }
    });

    const result = {
      studentEmail,
      testId: currentTest._id,
      startTime,
      endTime,
      totalMarks: score,
    };

    console.log("Submitting result:", result);
    await axios.post("http://localhost:3000/api/assignment/submit", result);
    navigate("/thankyou");
  };

  if (!currentTest) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Available Assignments</h2>
        {assignments.map((test) => (
          <div key={test._id} className="border p-3 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">{test.testTitle}</h3>
            <p>Total Marks: {test.totalMarks}</p>
            <p>Allowed Time: {test.allowedTime} mins</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => startTest(test)}
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    );
  }

  const question = currentTest.questions[currentQuestionIndex];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{currentTest.testTitle}</h2>
        <p className="font-bold text-red-500">
          Time Remaining: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}
        </p>
      </div>

      {/* Navigation Panel */}
      <div className="mb-6 shadow-md bg-gray-50 p-2 rounded">
        <h4 className="font-semibold mb-2">Question Navigation</h4>
        <div className="flex flex-wrap gap-2">
          {currentTest.questions.map((_, idx) => {
            const status = questionStatus[idx];
            let bgColor = "bg-gray-300";
            if (status === "visited") bgColor = "bg-yellow-300";
            if (status === "answered") bgColor = "bg-green-400";

            return (
              <button
                key={idx}
                onClick={() => goToQuestion(idx)}
                className={`${bgColor} w-10 h-10 rounded-full font-bold`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <div className="mt-2 text-sm space-x-4">
          <span className="inline-flex items-center">
            <span className="inline-block w-4 h-4 bg-gray-300 rounded mr-1" /> Unvisited
          </span>
          <span className="inline-flex items-center">
            <span className="inline-block w-4 h-4 bg-yellow-300 rounded mr-1" /> Visited
          </span>
          <span className="inline-flex items-center">
            <span className="inline-block w-4 h-4 bg-green-400 rounded mr-1" /> Answered
          </span>
        </div>
      </div>

      {/* Question Block */}
      <div className="border p-4 rounded shadow mb-4">
        <p className="font-semibold mb-2">
          Q{currentQuestionIndex + 1}: {question.questionText}
        </p>
        {["A", "B", "C", "D"].map((opt) => (
          <div key={opt} className="mb-1">
            <label>
              <input
                type="radio"
                name={question._id}
                value={opt}
                checked={answers[question._id] === opt}
                onChange={() => handleAnswer(question._id, opt)}
              />
              {` ${question[`option${opt}`]}`}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          disabled={currentQuestionIndex === 0}
          onClick={() => goToQuestion(currentQuestionIndex - 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </button>
        {currentQuestionIndex < currentTest.questions.length - 1 ? (
          <button
            onClick={() => goToQuestion(currentQuestionIndex + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentTest;
