import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

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

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm();

  function onSubmit(data) {

    const newTask = {
      id: Date.now(),
      title: data.title.trim(),
      description: data.description.trim(),
    };
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
    reset();
  }
  
  return (
    <div className="App">
      <h1>Task Notes</h1>
      <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add a New Task</h2>

         <input
          type="text"
          placeholder="Enter task title"
          {...register("title", {
            required: "Task title is required",
            maxLength: {
              value: 100,
              message: "Title cannot exceed 100 characters",
            },
            validate: (value) =>
              value.trim().length > 0 ||
              "Title cannot be empty",
          })}
        />

        {errors.title && (
          <p className="error">{errors.title.message}</p>
        )}

        <textarea
          placeholder="Enter task description"
          rows={3}
          {...register("description", {
            required: "Task description is required",
            maxLength: {
              value: 500,
              message: "Description cannot exceed 500 characters",
            },
            validate: (value) =>
              value.trim().length > 0 ||
              "Description cannot be empty",
          })}
        />

        {errors.description && (
          <p className="error">
            {errors.description.message}
          </p>
        )}

        <button type="submit" disabled ={isSubmitting}>{isSubmitting ? "Adding task" : "Add task"}</button>
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
