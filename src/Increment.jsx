import React from "react";
import { useDispatch } from "react-redux";

const Increment = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const button_style = {
    backgroundColor: "grey",
    padding: "10px 10px",
    color: "red"
  };

  return (
    <button onClick={handleIncrement} style={button_style}>
      Прибавить
    </button>
  );
};

export default Increment;
