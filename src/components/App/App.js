import React, { Component } from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { AppWrapper } from "./App.styled";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGiven = ({ target }) => {
    const value = target.textContent;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    return Math.round((100 * good) / total);
  };

  render() {
    const total = this.countTotalFeedback();
    const ButtonInner = Object.keys(this.state);

    return (
      <AppWrapper>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={ButtonInner}
            onLeaveFeedback={this.handleFeedbackGiven}
          ></FeedbackOptions>
        </Section>
        {total === 0 && (
          <Notification message="No feedback given"></Notification>
        )}
        {total > 0 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total)}
            />
          </Section>
        )}
      </AppWrapper>
    );
  }
}
