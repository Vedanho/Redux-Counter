import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Decrement = () => {
  const dispatch = useDispatch(); //создаём константу, в который будет храниться Dispatch. Dispatch будет передавать необходимые данные для reducer

  const number = useSelector((state) => state.number); /*В данный дочерний компонент берём из провайдера state. 
  Чтобы наш декремент не уменьшал числа в случае если счетик равен нулю */

  const handleDecrement = () => {
    if (number > 0) {
      dispatch({ type: "decrement" });
    }
  };
 
//Задаём стиль без создания отдельного файла

  const button_style = {
    backgroundColor: "grey",
    padding: "10px 10px",
    color: "yellow",
  };

  return (
    <button onClick={handleDecrement} style={button_style}>
      Отнять
    </button>
  );
};

export default Decrement;
