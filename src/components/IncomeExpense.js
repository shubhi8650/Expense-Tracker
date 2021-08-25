
import React, { useContext } from 'react'
import {GlobalState} from '../App';


function IncomeExpense() {
    const {transaction} = useContext(GlobalState);
    const positive = transaction.map(trans=>trans.amount).filter((item)=>(item>0))
    const positiveFinal = positive.reduce((acc, item)=>(acc+=item), 0).toFixed(2);

    const negative = transaction.map(trans=>trans.amount).filter((item)=>(item<0))
    const negativeFinal = negative.reduce((acc, item)=>(acc+=item), 0).toFixed(2);
    
    return (
        <div className="income-expense">
            <div className="income">
                <h3>Income</h3>
                <p className="money plus">+${positiveFinal}</p>
            </div>
            <div className="expense">
                <h3>Expense</h3>
                <p  className="money minus" >-${Math.abs(negativeFinal)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
