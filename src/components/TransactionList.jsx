import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

        return (
            <ul className="history container">
                <h2>History</h2>
                {transactions.map(transaction => (
                  <Transaction 
                    key={transaction.id} 
                    transaction={transaction}/>
                ))}
            </ul>
        )
    
}
