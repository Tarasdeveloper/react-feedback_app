import { Component } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = e => {
    const currentBtn = e.target.name;
    this.setState(prevstate => ({
      [currentBtn]: prevstate[currentBtn] + 1,
    }));
  };

  // goodIncrement = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // neutralIncrement = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // badIncrement = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const showStats = this.countTotalFeedback() > 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {showStats ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
