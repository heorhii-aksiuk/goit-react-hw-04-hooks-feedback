import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Statistic.module.css';

class Statistic extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

export default Statistic;
