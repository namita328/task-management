import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Filters from "./Filters";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) =>
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);

  const editTask = (id, updates) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Task Management Dashboard
        </h1>
        <TaskForm addTask={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={tasks}
          filter={filter}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </div>
  );
};

export default TaskDashboard;
