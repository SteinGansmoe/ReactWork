import { useMemo, useState } from "react";
import { CounterExercise } from "./problems/Counter";
import { TodoList } from "./problems/ToDoList";
import { DebouncedSearch } from "./problems/DebouncedSearch";

type Exercise = {
  id: string;
  title: string;
  Component: () => React.ReactElement;
};

export function ExerciseRunner() {
  const exercises = useMemo<Exercise[]>(
    () => [
      { id: "counter", title: "Counter", Component: CounterExercise },
      { id: "todo", title: "ToDoList", Component: TodoList },
      { id: "debounced", title: "DebouncedSearch", Component: DebouncedSearch },
      // Add more exercises here later
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(exercises[0].id);

  const selected = exercises.find((e) => e.id === selectedId) ?? exercises[0];

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>ReactWork</h1>
      <p style={{ marginTop: 0, opacity: 0.75 }}>
        Practice exercises (React + TypeScript)
      </p>

      <label style={{ display: "block", margin: "16px 0 8px" }}>
        Choose exercise:
      </label>

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        {exercises.map((e) => (
          <option key={e.id} value={e.id}>
            {e.title}
          </option>
        ))}
      </select>

      <hr style={{ margin: "20px 0" }} />

      <selected.Component />
    </div>
  );
}