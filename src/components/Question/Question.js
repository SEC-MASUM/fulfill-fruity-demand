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
          <p className="answer">
            <span>
              Props:
              <br />
              1. Props শুধু parent component থেকে child component এ Data পাঠায়।
              child component থেকে parent component এ Data পাঠাতে পারে না।
              <br />
              2. Props নিজে immutable.
              <br />
              3. Props যে কোনো component এ use করা যায়।
              <br />
              4. Props read only.
            </span>
            <br />
            <br />
            <span>
              State:
              <br />
              1. State যে component এ থাকে শুধু সেইটার ভিতর পাঠায় অন্য component
              এ পাঠাতে পারে না ।
              <br />
              2. State mutable.
              <br />
              3. যে component এ State use হয় তাকে Statefull component বলে।
              <br />
              4. State is not read only.
            </span>
          </p>
        </div>
        <div className="question-container">
          <h1 className="question">How useState works?</h1>
          <p className="answer">
            useState একটা Hook. useState() function টা React এর component এর
            state manage করতে হেল্প করে। একটা component এ এক বা একাধিক state
            থাকতে পারে। এ জন্য যতগুলো প্রয়োজন ততগুলা useState() use করা যাবে।
            useState() function এ একটা initial state দিয়ে দেয়া যায়, এই
            useState() funtion একটা current state এর মান সহ একটা variable
            রিটার্ন করে এবং সাথে একটা setfunction রিটার্ন করে যার মাধ্যমে
            পরবর্তিতে variable টার মান update করা হয়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
/* 
  
*/
