

import React, { useContext } from 'react'
import {GlobalState} from '../App'
import Transaction from './Transaction';


function TransactionList() {
    const {transaction} = useContext(GlobalState);
    console.log(transaction)
    return (
        <div className="transaction-list">
            <h3>History</h3>
            <ul className="list">
                {transaction.map((trans)=>(
                    <Transaction  trans = {trans}/>
                ))}
                
            </ul>
        </div>
    )
}

export default TransactionList
