// components/TaskList.js
import React from "react";

const TaskList = ({ mainTask, deleteHandler }) => {
  if (mainTask.length === 0) {
    return <p>No task available!</p>;
  }

  return (
    <ul>
      {mainTask.map((t, i) => (
        <li key={i}>
          <div className="flex justify-between mb-5">
            <h5 className="text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
            <button
              onClick={() => deleteHandler(i)}
              className="bg-red-600 text-white rounded p-4 font-semibold"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
