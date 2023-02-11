import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses,budget,dispatch } = useContext(AppContext);

    const checkBudget = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(value > 20000) {
            alert("The value cannot exceed 20000");  
        }
        else if (value < totalExpenses) {
            alert("Budget cannot be less than Expenses");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload : value
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step="10"
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => checkBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
