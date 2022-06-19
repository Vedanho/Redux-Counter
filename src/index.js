import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Импортируем необходимые функции и компоненты

import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Задаём первоначальное значение для нашего счетчика

const initialState = {
  number: 0,
};

//Создаём функцию, которая будет изменять наш счётчик

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        number: state.number + 1,
      };
      case "decrement":
        return {
          ...state,
          number:state.number - 1
        }
      case "reset": 
      return {
        ...state, 
        number: 0
      }
    default:
      return state;
  }
};

//Store нужен для хранения обновленных данных

const store = createStore(reducer);

//Провайдеру задаём атрибут store, который будет использоваться для всех дочерних элементов

root.render(
  <React.StrictMode> 
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
