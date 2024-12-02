import React from "react";

const Filters = ({ filter, setFilter }) => {
  const filters = ["all", "completed", "pending", "overdue"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 text-sm rounded ${
            filter === f
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-100"
          }`}
        >
          {" "}
          {f.charAt(0).toUpperCase() + f.slice(1)} Tasks
        </button>
      ))}
    </div>
  );
};

export default Filters;
