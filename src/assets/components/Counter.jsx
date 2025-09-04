import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }
    useEffect(() => {
    document.body.style.backgroundColor = "#9d4edd"; 
    document.body.style.transition = "background-color 0.5s ease";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="counter_container" style={{ textAlign: "center", marginTop: "50px"}}>
        <h2>شمارنده: {count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}
