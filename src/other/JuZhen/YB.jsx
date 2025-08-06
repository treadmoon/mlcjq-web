// RankPerformanceTable.jsx
import React from 'react';
import './RankPerformanceTable.less';

const RankPerformanceTable = () => {
  const data = [
    { rank: 'P6', values: [1] },
    { rank: 'P5', values: [1, 5] },
    { rank: 'P4', values: [1, 1, 4, 8, 1] },
    { rank: 'P3', values: [1, 3, 3] },
    { rank: 'P2', values: [] },
    { rank: 'P1', values: [] },
  ];

  const performanceLevels = ['E', 'D', 'C', 'B', 'A'];

  return (
    <div className="performance-table">
      <div className="header">
        <h2>职级与绩效等级分析</h2>
        <div className="cycle-type">周期类型：年度</div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th rowSpan="2">职级</th>
            <th colSpan="5">分布</th>
          </tr>
          <tr>
            {performanceLevels.map(level => (
              <th key={level} className={`level-${level}`}>{level}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {data.map(({ rank, values }) => (
            <tr key={rank}>
              <td className="rank-level">{rank}</td>
              {performanceLevels.map((_, index) => (
                <td 
                  key={index}
                  className={`level-${performanceLevels[index]}`}
                >
                  {values[index] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankPerformanceTable;