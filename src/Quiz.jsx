import React, { useState } from "react";
import quizData from "./quizData";

const Quiz = () => {
  let skinType;
  const [currentQues, setQues] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleClick = (selectedAns) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQues] = selectedAns;
    setAnswers(updatedAnswers);

    if (currentQues < quizData.length - 1) {
      setQues(currentQues + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateSkinType = () => {
    const selectedAnswers = answers.map((ans) => ans);

    if (
      (selectedAnswers[0] === "Large and visible all over" ||
        selectedAnswers[0] === "Medium-sized all over" ||
        selectedAnswers[0] === "Small, not easily noticed all over") &&
      selectedAnswers[1] === "Anytime I have blemishes" &&
      (selectedAnswers[2] === "Shiny in my T-zone but dull on my cheeks" ||
        selectedAnswers[2] === "Bright like diamond") &&
      (selectedAnswers[3] === "Oily in places and dry in others" ||
        selectedAnswers[3] === "Slick and greasy") &&
      selectedAnswers[4] === "Blotting or powder all over" &&
      selectedAnswers[5] === "Clean, for now, but the oil is coming soon" &&
      selectedAnswers[6] === "I hate them, but they love me"
    ) {
      return "Skin Type: Oily Skin";
    } else if (
      (selectedAnswers[0] === "Medium-sized all over" ||
        selectedAnswers[0] === "Small, not easily noticed all over") &&
      (selectedAnswers[1] === "Sometimes, but only around my cheeks" ||
        selectedAnswers[1] === "Anytime I have blemishes") &&
      (selectedAnswers[2] === "Dull everywhere" ||
        selectedAnswers[2] === "I get more stinging than shine") &&
      selectedAnswers[3] === "Rough and scaly" &&
      (selectedAnswers[4] === "Moisturizing, moisturizing, moisturizing" ||
        selectedAnswers[4] === "A refreshing spritz of facial spray") &&
      (selectedAnswers[5] === "Stripped of moisture" ||
        selectedAnswers[5] === "Itchy and a little bit dry") &&
      selectedAnswers[6] ===
        "I'd trade my skin's flakiness and tightness for a few blackheads"
    ) {
      return "Skin Type: Dry Skin";
    } else if (
      (selectedAnswers[0] ===
        "Larger or medium and only visible in the T-zone" ||
        selectedAnswers[0] === "Medium-sized all over" ||
        selectedAnswers[0] === "Small, not easily noticed all over") &&
      (selectedAnswers[1] === "Sometimes, but only around my cheeks" ||
        selectedAnswers[1] === "Whenever and wherever I use new products" ||
        selectedAnswers[1] === "Anytime I have blemishes") &&
      selectedAnswers[2] === "Shiny in my T-zone but dull on my cheeks" &&
      selectedAnswers[3] === "Oily in places and dry in others" &&
      selectedAnswers[4] ===
        "Blotting or powdering on the forehead, nose, and/or chin" &&
      selectedAnswers[5] ===
        "Clean and great in my T-zone, but my cheeks are a little bit dried out" &&
      selectedAnswers[6] ===
        "They have their territory around my T-zone, and I have claimed the cheeks for my own"
    ) {
      return "Skin Type: Combination Skin";
    } else if (
      (selectedAnswers[0] === "Small, not easily noticed all over" ||
        selectedAnswers[0] === "Medium-sized all over") &&
      (selectedAnswers[1] === "Anytime I have blemishes" ||
        selectedAnswers[1] === "Whenever and wherever I use new products" ||
        selectedAnswers[1] === "More often than I care to admit") &&
      (selectedAnswers[2] === "I get more stinging than shine" ||
        selectedAnswers[2] === "Bright like diamond") &&
      selectedAnswers[3] === "Irritated and angry" &&
      selectedAnswers[4] === "A refreshing spritz of facial spray" &&
      selectedAnswers[5] === "Itchy and a little bit dry" &&
      selectedAnswers[6] ===
        "My blemishes are more likely to be broken capillaries or rashes"
    ) {
      return "Skin Type: Sensitive Skin";
    } else {
      return "Skin Type: Normal Skin";
    }
  };

  // Calling calculateSkinType function
  if (quizCompleted) {
    skinType = calculateSkinType();
    console.log(skinType);
  }

  return (
    <div>
      {quizCompleted ? (
        <div className="text-[#c49358] text-5xl font-semibold text-center">
          <h2>{skinType}</h2>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-x-10">
          <h1 className="text-[#c49358] text-5xl -mt-5 text-center font-semibold">
            Know your skin!
          </h1>
          <h2 className="text-white text-3xl font-normal mt-16 m-3">
            {quizData[currentQues].question}
          </h2>
          <div className="border border-[#c49358] flex flex-col p-5 rounded-xl m-5 pl-10 pr-10">
            {quizData[currentQues].options.map((option, index) => {
              return (
                <button
                  onClick={() => handleClick(option)}
                  className="border border-[#c49358] text-[#c49358] w-96  font-bold px-1 py-4 m-3 rounded-full hover:bg-black hover:text-white duration-500"
                  key={index}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
