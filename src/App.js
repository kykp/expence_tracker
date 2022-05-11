import React, {useEffect, useState} from "react";
import { History } from "./components/History/History";

function App() {
  const [data, setData]= useState([{
    id: 0,
    name: "Cash",
    value: 500,
    income: true,
  }, {
    id: 1,
    name: "Book",
    value: -40,
    income: false,
  },{
    id: 2,
    name: "Camera",
    value: -200,
    income: false,
  }
]);

const [text, setText] = useState("");
const [value, setValue] = useState("");
const [balance, setBalance] = useState();
const [onExpense, setExpence] = useState();
const [onIncome, setIncom] = useState();


function summ () {
  let currentBalance = 0;

  data.forEach(el => currentBalance += el.value )
  return currentBalance;
}

function handleExpense () {
  let expense = 0; 
  
  data.forEach(el => el.value < 0 ? expense += el.value : null)
  return expense;
}
function handleIncome () {
  let income = 0;
  data.forEach(el => el.value > 0 ? income += el.value : null)
  return income;
}

useEffect(() => {
  setBalance(summ)
  setExpence(handleExpense)
  setIncom(handleIncome)
},[])


const handleSubmit = (event) => {
  event.preventDefault();

  let id = data.length +1;
  let name = text;
  let price = +value;
  let income = false;
  if (price > 0) {
    income = true;
    setIncom(onIncome + price);
  } else {
    income = false;
    setExpence(onExpense + price);
  }
  setBalance(balance + price);
  setData([...data, {id: id, name: name, value: price, income: income}])
}

  return (
    <div className="App container">
      
      <div className="balance container">
        <h1>Expense Tracker</h1>
        <h3>Your Balance</h3>
        <h3>${balance}</h3>
      </div>
      <div className="total container">
        <div>
          <h3 >Income</h3>
          <p className="total__income">${onIncome}</p>
        </div>
        <div>
          <h3 >Expense</h3>
          <p className="total__expense">${onExpense}</p>
        </div>
      </div>

     <History data={data}/>

      <form className="transaction container">
        <h2>Add New Transaction</h2>
        <div className="transaction__input">
          <label className="label" htmlFor="text">Text</label>
          <input 
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Input Text"/>
        </div>
        <div className="transaction__input">
          <label className="label" htmlFor="amount">Amount (negative - expense, positive - income)</label>
          <input 
            type="text"
            id="amount"
            name="amount"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Enter Amount"></input>
        </div>
        <input 
          className="transaction__submit" 
          type="submit" 
          value="Add Transaction"
          onClick={handleSubmit}/>
      </form>

      
    </div>
  );
}

export default App;
