import React, { useContext } from 'react';
import '../css/Balance.css';
import { GlobalContext} from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    console.log("t", transactions)
    const amounts = transactions.map(transation => transation.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    return (
        <div className="balance-wrapper">
            <h3>Your Balance: </h3>
            <h3>${total}</h3>
        </div>
    )
}

export default Balance
