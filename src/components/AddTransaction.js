

import React, { useContext, useState } from 'react';
import {GlobalState} from '../App.js'

function AddTransaction() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalState)

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction ={
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount //parsing as integer
        }
        addTransaction(newTransaction);
        setAmount(0);
        setText('')
    }
    return (
        <div className="add-transaction">
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <br></br>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <br></br>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="enter amount..."/>
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
