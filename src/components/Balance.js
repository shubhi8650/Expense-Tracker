

import React, { useContext } from 'react'
import {GlobalState} from '../App'


function Balance() {
    const {transaction} = useContext(GlobalState);
    const amount = transaction.map(trans=> trans.amount)
    const total = amount.reduce((acc, item)=>(acc+=item), 0).toFixed(2);
    return (
        <div>
            <div className="balance">
                <h3>Your Balance</h3>
                <h1>${total}</h1>
            </div>
        </div>
    )
}

export default Balance
