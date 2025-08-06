import React from 'react';
import './TreeGraph.less';

// 模拟树图数据
const treeData = {
    title: '总指标',
    A: 100,
    B: 200,
    children: [
        {
            title: '子指标 1',
            A: 20,
            B: 30,
            children: [
                {
                    title: '子指标 1 - 1',
                    A: 5,
                    B: 10
                },
                {
                    title: '子指标 1 - 2',
                    A: 15,
                    B: 20
                }
            ]
        },
        {
            title: '子指标 2',
            A: 30,
            B: 40
        }
    ]
};

// 递归渲染树图节点
const renderNode = (node, level = 0) => {
    return (
        <div className="tree-node" style={{ marginLeft: `${level * 50}px` }}>
            <div className="card">
                <div className="card-title">{node.title}</div>
                <div className="card-metrics">
                    <span>{node.A}</span>
                    <span>{node.B}</span>
                </div>
            </div>
            {node.children && (
                <div className="children-container">
                    {node.children.map((child, index) => (
                        <React.Fragment key={index}>
                            <div className="line"></div>
                            <div className="operator">+</div>
                            {renderNode(child, level + 1)}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

const TreeGraph = () => {
    return (
        <div className="tree-graph">
            {renderNode(treeData)}
        </div>
    );
};

export default TreeGraph;
    