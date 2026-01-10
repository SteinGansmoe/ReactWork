import { useState } from "react";

export function CounterExercise() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <h2>Counter</h2>
      <p>Increase/decrease. Disable decrease at 0.</p>

      <div style={{ fontSize: 24 }}>Count: {count}</div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCount((c) => c + 1)}>Increase</button>

        <button
          onClick={() => setCount((c) => c - 1)}
          disabled={count === 0}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}