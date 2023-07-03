import React, { useState } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";
import Notification from "./Feedback/Notification";


export function App () {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const onLeaveFeedback = e => {
    switch (e) {
      case "goodValue":
        setGoodValue((prevValue) => prevValue + 1);
        break;
      case "neutralValue":
        setNeutralValue((prevValue) => prevValue + 1);
        break;
      case "badValue":
        setBadValue((prevValue) => prevValue + 1);
        break;
      default:
        break;
    }
  };


  const countTotalFeedback = () => {
    return goodValue + neutralValue + badValue;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((goodValue / countTotalFeedback()) * 100);
  };

  return (
    <div className="counter">
      <FeedbackOptions options={{ goodValue, neutralValue, badValue }} onLeaveFeedback={onLeaveFeedback} />
      {countTotalFeedback() !== 0 ? (
        <Statistics
          goodValue={goodValue}
          neutralValue={neutralValue}
          badValue={badValue}
          onTotal={countTotalFeedback()}
          onPositiveFeedback={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={"There is no feedback"} />
      )}
    </div>
  );
};




