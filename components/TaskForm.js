// components/TaskForm.js
import React from "react";

const TaskForm = ({ task, desc, setTask, setDesc, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="text-2xl border-8 m-12 px-10 py-4 border-zinc-800"
        placeholder="ENTER YOUR TASK"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        className="text-2xl border-8 m-12 px-10 py-4 border-zinc-800"
        placeholder="ENTER YOUR DESCRIPTION"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="bg-black text-white rounded m-12 px-8 py-5 text-4xl text-justify">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
