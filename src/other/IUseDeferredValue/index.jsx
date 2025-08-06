import React, { useState, useEffect, useDeferredValue } from 'react';

// 模拟一个异步的数据获取函数
const fetchData = async (query) => {
    // 模拟网络请求延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Array.from({ length: 10 }).map((_, index) => `Item ${query}-${index}`);
};

const App = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await fetchData(query);
            setData(result);
        };
        fetch();
    }, [query]);

    // 使用 useDeferredValue 延迟更新 UI
    const deferredQuery = useDeferredValue(query);

    return (
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入查询内容"
                className="border border-gray-300 p-2 rounded-md mb-4"
            />
            <div>
                {deferredQuery? (
                    <div>
                        <p>正在显示关于 "{deferredQuery}" 的结果：</p>
                        <ul>
                            {data.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>请输入查询内容</p>
                )}
            </div>
        </div>
    );
};

export default App;
    