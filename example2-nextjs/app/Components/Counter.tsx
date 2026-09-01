"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncriment = () => {
    setCount(count + 1);
  };
  const handleDecriment = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncriment}>+</button>
      <button onClick={handleDecriment}>-</button>
    </>
  );
};

export default Counter;
