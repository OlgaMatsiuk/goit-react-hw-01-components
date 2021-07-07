import React from 'react';
import PropTypes from "prop-types";
// import defaultImage from './default.svg';

const Statistics = (props) => {
    return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>
  <ul class="stat-list">
    <li class="item">
      <span class="label">{props.label}</span>
      <span class="percentage">{props.percentage}</span>
    <img src={props.url} width="120" />
    </li>
    
  </ul>
</section>
    )
};
// Statistics.propTypes = {
//   url: PropTypes.string,
//   // title: PropTypes.string,
//   label: PropTypes.string,isRequired, 
//   percentage: PropTypes.number.isRequired,
// }
// Statistics.defaultProps = {
//     url: defaultImage,
// }  

export default Statistics;
