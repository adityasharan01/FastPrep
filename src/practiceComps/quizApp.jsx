import { useState, useEffect } from 'react';
/*
We need to build a quiz application 
in which questions and answers to it are 
coming from an api.
after answer all the list of questions user will submit the responses.
based on that evaluation score will be displayed.
API:
https://opentdb.com/api.php?amount=3. 
*/

/**
 * 
 * 
 * 
 * {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Science &amp; Nature",
      "question": "What term is best associated with Sigmund Freud?",
      "correct_answer": "Psychoanalysis",
      "incorrect_answers": [
        "Cognitive-Behavioral Therapy",
        "Theory of Gravity",
        "Dialectical Behavior Therapy"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "When one is &quot;envious&quot;, they are said to be what color?",
      "correct_answer": "Green",
      "incorrect_answers": [
        "Red",
        "Blue",
        "Yellow"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Japanese Anime &amp; Manga",
      "question": "In &quot;Love Live: School Idol Project&quot; what pseudonym does Kotori Minami use in her job as a maid?",
      "correct_answer": "Minalinsky",
      "incorrect_answers": [
        "Stanoytchev",
        "Kuznetsov",
        "Aqours"
      ]
    }
  ]
}
 */
// Sample API response
const apiResponse = {
    "response_code": 0,
    "results": [
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Video Games",
            "question": "Who voices the character &quot;Vernon Cherry&quot; in &quot;Red Dead Redemption&quot;?",
            "correct_answer": "Casey Mongillo",
            "incorrect_answers": ["Tara Strong", "Troy Baker", "Rob Wiethoff"]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Sports",
            "question": "Who was the topscorer for England national football team?",
            "correct_answer": "Wayne Rooney",
            "incorrect_answers": ["David Beckham", "Steven Gerrard", "Michael Owen"]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Entertainment: Music",
            "question": "According to a song by Belinda Carlisle, Heaven is a place on what?",
            "correct_answer": "Earth",
            "incorrect_answers": ["Venus", "Mars", "Uranus"]
        }
    ]
};

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        // Simulate fetching data from an API by using the sample response
        const formattedQuestions = apiResponse.results.map((item, index) => ({
            id: index,
            question: item.question.replace(/&quot;/g, '"'), // Decode HTML entities
            correct_answer: item.correct_answer,
            options: [item.correct_answer, ...item.incorrect_answers].sort(() => Math.random() - 0.5), // Shuffle options
        }));
        setQuestions(formattedQuestions);
    }, []);

    const handleOptionChange = (questionId, option) => {
        setResponses({
            ...responses,
            [questionId]: option,
        });
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach(question => {
            if (responses[question.id] === question.correct_answer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
    };

    return (
        <div>
            <h1>Quiz</h1>
            {questions.map(question => (
                <div key={question.id}>
                    <p>{question.question}</p>
                    {question.options.map(option => (
                        <label key={option}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                onChange={() => handleOptionChange(question.id, option)}
                                checked={responses[question.id] === option}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
            {score !== null && <p>Your score is: {score} / {questions.length}</p>}
        </div>
    );
};

export default QuizApp;




//Method-2
/*
import React, { useEffect, useState } from "react";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({}); // Use an object instead of an array
  const [score, setScore] = useState(null); // Initialize score state
  const API_ENDPOINT = "https://opentdb.com/api.php?amount=3";

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const finalResult = data.results.map((item) => ({
          ...item,
          all_questions: [...item.incorrect_answers, item.correct_answer].sort(
            () => Math.random() - 0.5
          ), // Shuffle options
        }));
        setQuestions(finalResult);
      })
      .catch((error) => console.error("error fetch", error)); // Proper error handling
  }, []);

  const handleOptionChange = (index, option) => {
    setResponses({
      ...responses,
      [index]: option, // Correctly update the response object
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (responses[index] === question.correct_answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers); // Update the score
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {questions.map((item, index) => (
        <div key={index}>
          <p>{item.question}</p>
          {item.all_questions.map((option, OptionIndex) => (
            <label key={OptionIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleOptionChange(index, option)}
                checked={responses[index] === option} // Correctly determine if an option is checked
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && (
        <p>
          Final score: {score} / {questions.length}
        </p>
      )}{" "}
      // Display the score
    </div>
  );
};

export default QuizApp;
 */