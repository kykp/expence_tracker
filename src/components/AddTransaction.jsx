import React, {useState, useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0)

    const { addTransactions } = useContext(GlobalContext);
    
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      
      addTransactions(newTransaction);
    }

  return (
    <form onSubmit={onSubmit} className="transaction container">
        <h2>Add new transaction</h2>
        <div className="transaction__input">
          <label className="label" htmlFor="text">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="transaction__input">
          <label className="label" htmlFor="amount">
            Amount <br/> (negative - expense, positive - income)
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          ></input>
        </div>
        <input
          className="transaction__submit"
          type="submit"
          value="Add Transaction"
        />
      </form>
  )
}
