import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const initialTasks = [
{
id: 1,
title: "Learn React",
description: "Understand components and JSX.",
},
{
id: 2,
title: "Practice useState",
description: "Learn how React manages state.",
},
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
    alert("Please enter both title and description.");
    return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
    setTitle("");
    setDescription("");
  }
  
  return (
    <div className="App">
      <h1>Task Notes</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add a New Task</h2>

        <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(event) =>
        setDescription(event.target.value)
        }
        rows="3"
        />

        <button type="submit">Add Task</button>
      </form>
      <section className="task-list">
        <h2>My Tasks ({tasks.length})</h2>

        {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
        ) : (
        tasks.map((task) => (
        <div className="task-card" key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        </div>
        ))
        )}
      </section>
      

    </div>
  )
}

export default App
