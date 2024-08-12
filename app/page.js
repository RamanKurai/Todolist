// app/page.js
"use client";
import React, { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const Page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  return (
    <>
      <h1 className="bg-black text-white text-5xl p-6 text-center font-semibold font-serif">
        Raman's Todo list
      </h1>
      <TaskForm
        task={task}
        desc={desc}
        setTask={setTask}
        setDesc={setDesc}
        submitHandler={submitHandler}
      />
      <hr />
      <div className="bg-slate-300 text-black p-11 text-2xl">
        <TaskList mainTask={mainTask} deleteHandler={deleteHandler} />
      </div>
    </>
  );
};

export default Page;
