import { useState } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistic from './components/Statistic/Statistic';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

export default function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedbacks;

  function handleIncrement(feedback) {
    setFeedbacks(prev => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  const total = countTotalFeedback();

  function countPositivePercentageFeedback() {
    return good === 0 ? 0 : Math.round((good / (good + neutral + bad)) * 100);
  }

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
