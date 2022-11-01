import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div className="counter">
                <h1>Counter Component: </h1>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Inc +</button>
                <button onClick={() => setCount(count - 1)}>Dec -</button>
            </div>
        </>
    );
};

export default Counter;
