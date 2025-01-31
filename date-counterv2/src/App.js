import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step:{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from doay is `
            : `${Math.abs(count)} day before today was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        {count === 0 && step === 1 ? null : (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
}
