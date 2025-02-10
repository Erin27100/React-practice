import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tips = bill * (((percentage + friendPercentage) * 0.01) / 2);

  function handleReset() {
    setBill("");
    setPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div>
      <div>
        <span>How much was the bill?</span>
        <BillInput bill={bill} onSetBill={setBill} />
      </div>
      <div>
        <span>How did you like the service?</span>
        <SelectPercentage
          percentage={percentage}
          onSetPercentage={setPercentage}
        />
      </div>
      <div>
        <span>How did your friend like the service?</span>
        <SelectPercentage
          percentage={friendPercentage}
          onSetPercentage={setFriendPercentage}
        />
      </div>

      {bill > 0 && (
        <div>
          <Output bill={bill} tips={tips} />

          <Reset onReset={handleReset} />
        </div>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <input
      type="text"
      value={bill}
      placeholder="Bill value"
      onChange={(e) => onSetBill(Number(e.target.value))}
    ></input>
  );
}

function SelectPercentage({ percentage, onSetPercentage }) {
  return (
    <select
      value={percentage}
      onChange={(e) => onSetPercentage(Number(e.target.value))}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  );
}

function Output({ bill, tips }) {
  return (
    <h3>
      You pay $${bill + tips} ($${bill} + $${tips} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
