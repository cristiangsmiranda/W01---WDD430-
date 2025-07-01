import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function addTask() {
    if (task === '') return;

    setList([...list, task]);
    setTask('');
  }

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
