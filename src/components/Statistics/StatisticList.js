import React from 'react';
import Statistics from './Statistics';

const StatisticList = ({ statisticsData }) => (

    <ul>
    {statisticsData.map((statistics) => (
    <li key={statistics.id}>
      <Statistics
          label={statistics.label}
          percentage={statistics.percentage + '%'}
      />
      </li>  
      ))
    }
    {/* // title='Upload stats' */}
    </ul>
)
export default StatisticList;