
import { useForm } from "react-hook-form";

function Tasks({ tasks, setTasks }) {
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

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main className="page">
      <form
        className="task-form"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding task..." : "Add Task"}
        </button>
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

              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Tasks;
