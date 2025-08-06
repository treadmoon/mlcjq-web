import React from 'react';
import './PerformanceChart.less';

const PerformanceChart = () => {
  // Data for the chart
  const data = [
    { level: 'P6', grades: { A: 0, B: 0, C: 0, D: 1, E: 5 } },
    { level: 'P5', grades: { A: 1, B: 4, C: 8, D: 1, E: 0 } },
    { level: 'P4', grades: { A: 1, B: 3, C: 3, D: 0, E: 0 } },
    { level: 'P3', grades: { A: 1, B: 3, C: 3, D: 0, E: 0 } },
    { level: 'P2', grades: { A: 1, B: 3, C: 0, D: 0, E: 0 } },
    { level: 'P1', grades: { A: 0, B: 0, C: 0, D: 0, E: 0 } },
  ];

  // Grade colors
  const gradeColors = {
    A: '#FF6B6B',
    B: '#FFA36B',
    C: '#FFD166',
    D: '#88D8B0',
    E: '#6BCB77',
  };

  return (
    <div className="performance-chart">
      <h2>职级与绩效等级分析</h2>
      
      <div className="chart-container">
        <div className="header-row">
          <div className="empty-cell"></div>
          {['E', 'D', 'C', 'B', 'A'].map((grade) => (
            <div key={grade} className="grade-header" style={{ backgroundColor: gradeColors[grade] }}>
              {grade}
            </div>
          ))}
        </div>
        
        {data.map((item) => (
          <div key={item.level} className="data-row">
            <div className="level-cell">{item.level}</div>
            {['E', 'D', 'C', 'B', 'A'].map((grade) => (
              <div key={grade} className="data-cell">
                {item.grades[grade] > 0 ? item.grades[grade] : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="footer">
        <span>分布</span>
        <span className="period-type">周期类型* 年度</span>
      </div>
    </div>
  );
};

export default PerformanceChart;