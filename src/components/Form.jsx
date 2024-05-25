import React, { useState } from "react";
import { postData } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
const Form = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    taskDesc: "",
    taskDeadline: " ",
  });

  // wjenrevr  u have to call  any function use useDispatch
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    dispatch(postData(formData));
  }

  function changeHandler(event) {
    console.log(event.target.value);
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form">
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Task Name"
          name="taskName"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter Task Desc"
          name="taskDesc"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter Task deadline"
          name="taskDeadline"
          onChange={changeHandler}
        />

        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default Form;
