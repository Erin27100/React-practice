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

  return (
    <div>
      <div>
        <span>How much was the bill?</span>
        <BillInput bill={bill} onBill={setBill} />
      </div>
      <div>
        <span>How did you like the service?</span>
        <SelectPercentage
          percentage={percentage}
          onPercentage={setPercentage}
        />
      </div>
      <div>
        <span>How did your friend like the service?</span>
        <SelectPercentage
          percentage={friendPercentage}
          onPercentage={setFriendPercentage}
        />
      </div>

      {bill === "" ? null : (
        <div>
          <Output
            bill={bill}
            percentage={percentage}
            friendPercentage={friendPercentage}
          />

          <Reset
            onBill={setBill}
            onPercentage={setPercentage}
            onFriendPercentage={setFriendPercentage}
          />
        </div>
      )}
    </div>
  );
}

function BillInput({ bill, onBill }) {
  return (
    <input
      type="text"
      value={bill}
      placeholder="Bill value"
      onChange={(e) => onBill(e.target.value)}
    ></input>
  );
}

function SelectPercentage({ percentage, onPercentage }) {
  return (
    <select value={percentage} onChange={(e) => onPercentage(e.target.value)}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  );
}

function Output({ bill, percentage, friendPercentage }) {
  const tips =
    Number(bill) *
    (((Number(percentage) + Number(friendPercentage)) * 0.01) / 2);
  return (
    <p>
      You pay $${Number(bill) + tips} ($${bill} + $${tips} tip)
    </p>
  );
}

function Reset({ onBill, onPercentage, onFriendPercentage }) {
  return (
    <button
      onClick={() => {
        onBill("");
        onPercentage(0);
        onFriendPercentage(0);
      }}
    >
      Reset
    </button>
  );
}
