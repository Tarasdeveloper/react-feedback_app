import { useState } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackIncrement = e => {
    const currentBtn = e.target.name;
    setFeedback(prevstate => ({
      ...prevstate,
      [currentBtn]: prevstate[currentBtn] + 1,
    }));
  };

  const countTotalFeedback = () =>
    feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((feedback.good * 100) / countTotalFeedback());

  const showStats = countTotalFeedback() > 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>
      <Section title="Statistics">
        {showStats ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbackIncrement = e => {
//     const currentBtn = e.target.name;
//     this.setState(prevstate => ({
//       [currentBtn]: prevstate[currentBtn] + 1,
//     }));
//   };

//   // goodIncrement = () => {
//   //   this.setState(prevState => ({ good: prevState.good + 1 }));
//   // };
//   // neutralIncrement = () => {
//   //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//   // };
//   // badIncrement = () => {
//   //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
//   // };

//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   countPositiveFeedbackPercentage = () =>
//     Math.round((this.state.good * 100) / this.countTotalFeedback());

//   render() {
//     const showStats = this.countTotalFeedback() > 0;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.feedbackIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {showStats ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
