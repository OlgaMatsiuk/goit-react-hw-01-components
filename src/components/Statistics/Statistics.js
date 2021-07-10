import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(statistic => (
        <li
          className={styles.item}
          style={{ backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})` }}
          key={statistic.id}
        >
          <span className={styles.label}>{statistic.label}</span>
          <span className={styles.percentage}>{statistic.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
);
function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;