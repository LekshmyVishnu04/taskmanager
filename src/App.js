import { useState } from 'react';
import Child from './child';

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h1 id="heading">Task Manager</h1>
        <form className="mb-4" onSubmit={(e) => {
          e.preventDefault();
          const taskInput = e.target.elements.task.value;
          if (taskInput) {
            setTasks([...tasks, taskInput]);
            setMessage(`Task added: ${taskInput}!`);
            document.getElementById("heading").style.backgroundColor =
              "lightblue";
            e.target.reset();
          }
        }}>
          <input type="text" name="task" placeholder="Enter a task" />
          <button className="btn btn-primary" type="submit">Add Task</button>
        </form>
        <Child tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;
