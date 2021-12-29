import React from 'react'

function Transaction({ transaction }) {
    return (
        <li class="minus">
            {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
