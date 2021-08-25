
import React, { useContext } from 'react'
import {GlobalState} from '../App'

function Transaction({trans}) {
    const {deleteTransaction} = useContext(GlobalState);

    const sign = trans.amount <0 ? '-' : '+';
    return (
        <li className={trans.amount< 0 ? 'minus' : 'plus'}>
            {trans.text}<span>{sign}${Math.abs(trans.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(trans.id)}>x</button>
        </li>
    )
}

export default Transaction
