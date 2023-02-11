import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch }  = useContext(AppContext);

    const submitEvent = () => {
        let typ = document.getElementById("currency").value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: typ,
        });
    }

    return (
    <div className='alert alert-success'>
        <span>Currency: </span>
        <select 
            name="currency" 
            id="currency"
            onChange={submitEvent}
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
        </select>
    </div>
    );
};

export default Currency;