import { useEffect, useState } from "react";

const apiResponse = [
{
    "type": "boolean",
        "difficulty": "easy",
            "category": "Science &amp; Nature",
                "question": "An atom contains a nucleus.",
                    "correct_answer": "True",
                        "incorrect_answers": [
                            "False"
                        ],
                            "all_questions": [
                                "False",
                                "True"
                            ]
},
{
    "type": "multiple",
        "difficulty": "medium",
            "category": "Entertainment: Film",
                "question": "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
                    "correct_answer": "Auric Goldfinger",
                        "incorrect_answers": [
                            "Dr. Julius No",
                            "Rosa Klebb",
                            "Emilio Largo"
                        ],
                            "all_questions": [
                                "Dr. Julius No",
                                "Rosa Klebb",
                                "Emilio Largo",
                                "Auric Goldfinger"
                            ]
},
{
    "type": "multiple",
        "difficulty": "medium",
            "category": "Entertainment: Video Games",
                "question": "In World of Warcraft Lore, four Old Gods created a giant and powerful creature. What was it called? ",
                    "correct_answer": "The Ancient One",
                        "incorrect_answers": [
                            "Anomalous",
                            "Eater of Souls",
                            "The Lich King"
                        ],
                            "all_questions": [
                                "Anomalous",
                                "Eater of Souls",
                                "The Lich King",
                                "The Ancient One"
                            ]
}
]

const QuizApp2 = () => {
    const [questions, setQuestions] = useState(apiResponse);
  const [responses, setResponses] = useState([]);
//   const API_ENDPOINT = "https://opentdb.com/api.php?amount=3";

//   useEffect(() => {
//     // fetch
//     try {
//       fetch(API_ENDPOINT)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data, "data-1");
//           const array = data?.results || [];
//           const finalResult = array.map((item) => ({
//             ...item,
//             all_questions: [...item.incorrect_answers, item.correct_answer],
//           }));
//           console.log(finalResult,"SEXX KROGE");
//           setQuestions(finalResult);
//         });
//     } catch (error) {
//       console.error("error fetch", error);
//     }
//   }, []);

  const handleOptionChange = (index, option) => {
    const data = [
      ...responses,
      {
        [index]: option,
      },
    ];

      console.log(data, "rex");
          
    const filterDuplicates = (data) => {
          const seenKeys = {};
          return data.filter(item => {
              const key = Object.keys(item)[0]; 
              if (!seenKeys[key]) {
                  seenKeys[key] = true;
                  return true;
              }
              return false;
          });
      };

      const filteredData = filterDuplicates(data);

      setResponses(filteredData);
  };
    
    useEffect(() => { 
        console.log({responses})
    } , [responses])

  const handleSubmit = () => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (responses[question.id] === question.correct_answer) {
        correctAnswers++;
      }
    });

    // setScore(correctAnswers);
    console.log(correctAnswers);
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
                name={index}
                value={option}
                onChange={() => handleOptionChange(index, option)}
                checked={responses?.[index]?.[index] === option}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* <div>
        {score !== null && (
          <span>
            final score : {score} / {questions.length}
          </span>
        )}
      </div> */}
    </div>
  );
};

export default QuizApp2;