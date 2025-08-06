// App.jsx
import React, { useState } from 'react';
import './styles.less';

const App = () => {
  const [period, setPeriod] = useState('年度');
  const performanceData = [
    { grade: 'E', values: [12, 8, 5, 3, 1, 0] },
    { grade: 'D', values: [22, 15, 10, 6, 2, 1] },
    { grade: 'C', values: [35, 25, 18, 12, 5, 3] },
    { grade: 'B', values: [48, 35, 28, 20, 10, 5] },
    { grade: 'A', values: [60, 45, 35, 25, 15, 8] },
  ];

  return (
    <div className="analysis-container">
      <Header period={period} setPeriod={setPeriod} />
      <DataTable data={performanceData} />
    </div>
  );
};



const Header = ({ period, setPeriod }) => {
  return (
    <div className="header">
      <h1 className="title">职级与绩效等级分析</h1>
      <div className="filter">
        <select 
          value={period} 
          onChange={(e) => setPeriod(e.target.value)}
          className="period-select"
        >
          <option value="年度">年度</option>
          <option value="季度">季度</option>
          <option value="月度">月度</option>
        </select>
      </div>
    </div>
  );
};


const DataTable = ({ data }) => {
  const levels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
  
  return (
    <div className="data-table">
      <div className="table-header">
        <div className="empty-cell"/>
        {data.map((item) => (
          <div key={item.grade} className="header-cell">
            {item.grade}
          </div>
        ))}
      </div>
      
      {levels.map((level, index) => (
        <div key={level} className="table-row">
          <div className="row-header">{level}</div>
          {data.map((item, gradeIndex) => (
            <div 
              key={`${level}-${gradeIndex}`}
              className="data-cell"
              style={{ 
                backgroundColor: `var(--grade-${gradeIndex + 1}-color)` 
              }}
            >
              {item.values[index]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default App;