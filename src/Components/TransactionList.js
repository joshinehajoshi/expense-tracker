import React from 'react'

function TransactionList() {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li class="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList
