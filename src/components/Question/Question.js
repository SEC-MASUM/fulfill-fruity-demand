import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h1 className="faq">FAQ</h1>
      <div className="questions-container">
        <div className="question-container">
          <h1 className="question">How React works?</h1>
          <p className="answer">
            React হচ্ছে user interface তৈরির জন্য JS এর একটা জনপ্রিয় Library.
            User interface তৈরির জন্য HTML কোড ব্যবহার করা হয়। কিন্তু React, JS
            code কে HTML কোড এ convert করে user interface তৈর করে। এই কাজের জন্য
            'React' নামের package use হয়। HTML code কে browser এর real dom এ
            render করার আগেই সে নিজে একটা virtual dom create করে 'ReactDom'
            নামের package use করে। আর এই virtual DOM এর ভিতর যখন কোনো পরিবর্তন
            হয়, সেইটা কে real DOM এর কপি এর সাথে তুলনা করে ঠিক যতটুকু change পায়
            ততটুকুই real DOM এ render করে। এই কাজ এর জন্য পুরা page টা reload
            দেয়া লাগে না। এইটাই react এর beauty.
          </p>
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
/* 
  Props: 
  1. 
  2.
  3.
  4.
  State: 
  1.
  2.
  3.
  4.
*/
