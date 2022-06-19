import React from 'react';
import Decrement from './Decrement';
import Increment from './Increment';
import Reset from './Reset';
import "../src/Buttons.css"

const Buttons = () => {

    return (
        <div className='buttons_conteiner'>
            <Increment />
            <Decrement />
            <Reset />
        </div>
    );
};

export default Buttons;