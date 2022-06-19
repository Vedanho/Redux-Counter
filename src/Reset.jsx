import React from 'react';
import { useDispatch } from 'react-redux';

const Reset = () => {
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch({type: "reset"})
    }

   
    const button_style = {
        backgroundColor: "grey",
        padding: "10px 10px",
        color: "green"
      };

    return (
        <button onClick={handleReset} style = {button_style}>Обнулить</button>
    );
};

export default Reset;