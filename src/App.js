import { useState } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistic from './components/Statistic/Statistic';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = { good, neutral, bad };

  const handleIncrement = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositivePercentageFeedback = () => {
    return good === 0 ? 0 : Math.round((good / (good + neutral + bad)) * 100);
  };
  const positivePercentage = countPositivePercentageFeedback();

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
}
