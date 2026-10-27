

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <article className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button
            type="button"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
}

export default TaskList;