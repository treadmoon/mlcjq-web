import React from 'react';
import './PerformanceAnalysis.less';

const PerformanceAnalysis = () => {
  // 表格数据
  const performanceData = [
    { level: 'P6', E: '', D: '', C: '1', B: '', A: '' },
    { level: 'P5', E: '', D: '', C: '1', B: '5', A: '' },
    { level: 'P4', E: '1', D: '1', C: '4', B: '8', A: '1' },
    { level: 'P3', E: '', D: '1', C: '3', B: '3', A: '' },
    { level: 'P2', E: '', D: '', C: '', B: '', A: '' },
    { level: 'P1', E: '', D: '', C: '', B: '', A: '' },
  ];

  // 绩效等级对应的颜色
  const performanceColors = {
    E: '#ffc0cb',
    D: '#ffb38a',
    C: '#b3e6ff',
    B: '#b3ffb3',
    A: '#e6b3ff',
  };

  return (
    <div className="performance-analysis-container">
      <div className="header">
        <h2>职级与绩效等级分析</h2>
        <div className="period-selector">
          <span>周期类型 *</span>
          <select defaultValue="年度">
            <option value="年度">年度</option>
            <option value="季度">季度</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="row-header">分布</div>
          <div className="performance-grade">E</div>
          <div className="performance-grade">D</div>
          <div className="performance-grade">C</div>
          <div className="performance-grade">B</div>
          <div className="performance-grade">A</div>
        </div>

        <div className="table-body">
          {performanceData.map((row, rowIndex) => (
            <div key={rowIndex} className="table-row">
              <div className="row-header">{row.level}</div>
              <div className={`cell E ${row.E ? 'filled' : ''}`}>{row.E}</div>
              <div className={`cell D ${row.D ? 'filled' : ''}`}>{row.D}</div>
              <div className={`cell C ${row.C ? 'filled' : ''}`}>{row.C}</div>
              <div className={`cell B ${row.B ? 'filled' : ''}`}>{row.B}</div>
              <div className={`cell A ${row.A ? 'filled' : ''}`}>{row.A}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalysis;