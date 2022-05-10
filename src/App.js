function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h3>Your Balance</h3>
      <h3>$260</h3>

      <div className="total container">
        <div>
          <h3>Income</h3>
          <p>$500</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p>$240</p>
        </div>
      </div>

      <div className="history container">
        <div>
          <h3>Cash</h3>
          <h3>+500$</h3>
        </div>
        <div>
          <h3>Book</h3>
          <h3>-40$</h3>
        </div>
        <div>
          <h3>Camera</h3>
          <h3>-200$</h3>
        </div>
      </div>

      <div className="newTransaction container">
        <div>
          <h3>Text</h3>
          <input placeholder="Input text"></input>
        </div>
        <div>
          <h3>Amount (negative - expense, positive - income)</h3>
          <input placeholder="Enter amount"></input>
        </div>
      </div>

      <button>Add transaction</button>
    </div>
  );
}

export default App;
