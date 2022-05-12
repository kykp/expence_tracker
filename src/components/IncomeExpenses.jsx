import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="total container">
        <div>
          <h3>Income</h3>
          <p className="total__income">{income}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p className="total__expense">{expense}</p>
        </div>
      </div>
  )
}
