// src/pages/SurveyPage.tsx
import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import ButtonGroup from "../components/ButtonGroup";
import TextInput from "../components/TextInput";
import surveyData from "../data/survey.json"; // Importing the survey data
import DateOfBirthInput from "../components/DateOfBirthInput";

const SurveyPage: React.FC = () => {
  const [responses, setResponses] = useState({
    title: "",
    dateOfBirth: { day: "", month: "", year: "" },
    performanceRating: "",
    stressSources: "",
    workLifeBalance: "",
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(surveyData[0]);

  const isDateOfBirthValid = (dob: {
    day: string;
    month: string;
    year: string;
  }) => {
    const { day, month, year } = dob;
    return day && month && year;
  };

  const handleSkip = () =>{
    if (currentQuestionIndex < surveyData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const handleNext = () => {
    switch (currentQuestion.type) {
      case "title":
        if (!responses.title) {
          alert("Please select a title before proceeding.");
          return;
        }
        break;
      case "dateOfBirth":
        if (!isDateOfBirthValid(responses.dateOfBirth)) {
          alert("Please enter a valid date of birth.");
          return;
        }
        break;
      case "performanceRating":
        if (!responses.performanceRating) {
          alert("Please select a performance rating before proceeding.");
          return;
        }
        break;
      case "stressSources":
        if (!responses.stressSources) {
          alert("Please provide sources of stress before proceeding.");
          return;
        }
        break;
      default:
        break;
    }
    if (currentQuestionIndex < surveyData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentQuestion(surveyData[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const handleResponseChange = (value: string) => {
    setResponses({ ...responses, [currentQuestion.type]: value });
  };

  const handleDateOfBirthChange = (value: {
    day: string;
    month: string;
    year: string;
  }) => {
    setResponses({ ...responses, dateOfBirth: value });
  };

  const handleSubmit = () => {
    if (!responses.workLifeBalance) {
      alert("Please select a work-life balance option before proceeding.");
      return;
    } else {
      localStorage.setItem("surveyResponses", JSON.stringify(responses));
      alert("Survey submitted successfully!");
      setCurrentQuestionIndex(0);
      setCurrentQuestion(surveyData[0]);
      setResponses({
        title: "",
        dateOfBirth: { day: "", month: "", year: "" },
        performanceRating: "",
        stressSources: "",
        workLifeBalance: "",
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{currentQuestion.question}</h1>
      <p className="text-gray-600 mb-6">{currentQuestion.info}</p>

      {currentQuestion.type === "title" && (
        <Dropdown
          options={currentQuestion.options}
          value={responses.title || ""}
          onChange={handleResponseChange}
        />
      )}

      {currentQuestion.type === "dateOfBirth" && (
        <DateOfBirthInput
          value={responses.dateOfBirth || ""}
          onChange={handleDateOfBirthChange}
        />
      )}

      {currentQuestion.type === "performanceRating" && (
        <ButtonGroup
          options={currentQuestion.options}
          value={responses.performanceRating || ""}
          onChange={handleResponseChange}
        />
      )}

      {currentQuestion.type === "workLifeBalance" && (
        <ButtonGroup
          options={currentQuestion.options}
          value={responses.workLifeBalance || ""}
          onChange={handleResponseChange}
        />
      )}

      {currentQuestion.type === "stressSources" && (
        <TextInput
          value={responses.stressSources || ""}
          onChange={handleResponseChange}
        />
      )}

      <div className="flex justify-between mt-8">
        {currentQuestionIndex !== 0 && (
          <button
            disabled={currentQuestionIndex === 0}
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Back
          </button>
        )}
        {currentQuestionIndex === surveyData.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        ) : (
          <>
            {currentQuestion.type === "stressSources" && (
              <button
                onClick={handleSkip}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Skip
              </button>)
            }
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyPage;
