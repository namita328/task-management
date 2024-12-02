import React from "react";

const TaskList = ({
  tasks,
  filter,
  editTask,
  deleteTask,
  toggleCompletion,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue") return new Date(task.dueDate) < new Date();
    return true;
  });

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-lg shadow flex justify-between items-center ${
            task.completed ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <div>
            <h3
              className={`text-lg font-semibold ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`text-sm text-gray-500 ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.description}
            </p>
            <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleCompletion(task.id)}
              className={`px-4 py-2 rounded ${
                task.completed
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-black"
              }`}
              aria-label={`Mark task ${
                task.completed ? "pending" : "completed"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 bg-red-500 text-white rounded"
              aria-label="Delete task"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
