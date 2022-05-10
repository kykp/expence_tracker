function App() {
  return (
    <div className="App container">
      
      <div className="balance container">
        <h1>Expense Tracker</h1>
        <h3>Your Balance</h3>
        <h3>$260</h3>
      </div>
      <div className="total container">
        <div>
          <h3 >Income</h3>
          <p className="total__income">$500</p>
        </div>
        <div>
          <h3 >Expense</h3>
          <p className="total__expense">$240</p>
        </div>
      </div>

      <div className="history container">
        <h2>History</h2>
        <div className="history__item plus">
          <h3>Cash</h3>
          <h3>+500$</h3>
        </div>
        <div className="history__item minus">
          <h3>Book</h3>
          <h3>-40$</h3>
        </div>
        <div className="history__item minus">
          <h3>Camera</h3>
          <h3>-200$</h3>
        </div>
      </div>

      <div className="transaction container">
        <h2>Add New Transaction</h2>
        <div className="transaction__input">
          <h3>Text</h3>
          <input placeholder="Input text"></input>
        </div>
        <div className="transaction__input">
          <h3>Amount (negative - expense, positive - income)</h3>
          <input placeholder="Enter amount"></input>
        </div>
        <button>Add transaction</button>
      </div>

      
    </div>
  );
}

export default App;
