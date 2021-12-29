import React, { useContext } from 'react';
import '../css/IncomeExpenses.css';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
    const { transactions } =  useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);



    return (
        <div>
            <div>
                <h3>Income: </h3>
                <h4>+$20000</h4>
            </div>
            <div>
            <h3>Expenses: </h3>
            <h4>-$100</h4>
        </div>
        </div>
    )
}

export default IncomeExpenses
