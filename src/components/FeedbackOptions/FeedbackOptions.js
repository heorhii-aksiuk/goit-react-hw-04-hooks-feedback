import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.button}
        name="good"
        type="button"
        onClick={e => onLeaveFeedback(e.target.name)}
      >
        Good
      </button>
      <button
        className={s.button}
        name="neutral"
        type="button"
        onClick={e => onLeaveFeedback(e.target.name)}
      >
        Neutral
      </button>
      <button
        className={s.button}
        name="bad"
        type="button"
        onClick={e => onLeaveFeedback(e.target.name)}
      >
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
