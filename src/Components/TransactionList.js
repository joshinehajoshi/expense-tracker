import React, { useContext } from 'react';
import '../css/TransactionList.css';
import { GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
     const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <div>
            <ul className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction} />

                ))}
               
            </ul>
            </div>
        </div>
    )
}

export default TransactionList
