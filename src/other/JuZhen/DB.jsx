import React, { useState } from 'react';
import './styles2.less';

const PerformanceAnalysis = () => {
  const [cycleType, setCycleType] = useState('年度');
  const data = {
    P6: { C: 1 },
    P5: { C: 1, B: 5 },
    P4: { E: 1, D: 1, C: 4, B: 8, A: 1 },
    P3: { D: 1, C: 3, B: 3 },
    P2: {},
    P1: {}
  };
  const levels = ['E', 'D', 'C', 'B', 'A'];
  const ranks = ['P6', 'P5', 'P4', 'P3', 'P2', 'P1'];

  return (
    <div className="performance-analysis">
      <div className="header">
        <h2>职级与绩效等级分析</h2>
        <div className="cycle-select">
          <label>周期类型*</label>
          <select value={cycleType} onChange={(e) => setCycleType(e.target.value)}>
            <option value="年度">年度</option>
            <option value="季度">季度</option>
          </select>
        </div>
      </div>
      <table className="analysis-table">
        <thead>
          <tr>
            <th>分布</th>
            {levels.map(level => (
              <th key={level} className={`level-${level.toLowerCase()}`}>{level}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ranks.map(rank => (
            <tr key={rank}>
              <td>{rank}</td>
              {levels.map(level => (
                <td key={level} className={`level-cell level-${level.toLowerCase()}`}>
                  {data[rank][level] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceAnalysis;