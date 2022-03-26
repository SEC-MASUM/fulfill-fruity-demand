import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h1 className="faq">FAQ</h1>
      <div className="questions-container">
        <div className="question-container">
          <h1 className="question">How React works?</h1>
          <p className="answer">sfsdfsdfsd</p>
        </div>
        <div className="question-container">
          <h1 className="question">Props vs State</h1>
          <p className="answer">sfsdfsdfsd</p>
        </div>
        <div className="question-container">
          <h1 className="question">How useState works?</h1>
          <p className="answer">sfsdfsdfsd</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
