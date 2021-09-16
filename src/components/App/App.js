import React, { useState } from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { AppWrapper } from "./App.styled";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackGiven = ({ target }) => {
    const value = target.textContent;
    switch (value) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = (total) => {
    return Math.round((100 * good) / total);
  };

  const ButtonInner = ["good", "neutral", "bad"];

  return (
    <AppWrapper>
      <Section title="Please live feedback">
        <FeedbackOptions
          options={ButtonInner}
          onLeaveFeedback={handleFeedbackGiven}
        ></FeedbackOptions>
      </Section>
      {total === 0 && <Notification message="No feedback given"></Notification>}
      {total > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        </Section>
      )}
    </AppWrapper>
  );
}
