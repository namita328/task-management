import React from "react";
import TaskDashboard from "./Components/TaskDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <TaskDashboard />
      </main>
    </div>
  );
}

export default App;
