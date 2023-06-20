import "./Card.css";

function Card({spent, expiry, name, available_to_spend, current, budget_name}) {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <div className="title">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="right">
          <div className="right-icon">

          </div>
        </div>

        
      </div>
      <div className="categorey">
          <p>Memberfive</p>
          <div className="circle">

          </div>
          <p>{budget_name}</p>
          
        </div>
      <div className="body-content">
        <div className="content-items">
          <p>Amount</p>
          <h3>{current.amount} {current.currency}</h3>
        </div>
        <div className="content-items">
          <p>Frequency</p>
          <h3>Monthly</h3>
        </div>
        <div className="content-items">
          <p>Expiry</p>
          <h3>{expiry}</h3>
        </div>
        

        
      </div>
      <div className="color-line" >
            <div className="green-color"></div>
            {/* <meter></meter> */}
            <div className="red-color"></div>
        </div>
      <div className="footer">
        <div className="footer-items">
            
          <div className="circular-ring"></div>
          <div className="title-name">Spent</div>
          <div className="price">{spent.value} {spent.currency}</div>
        </div>
        <div className="footer-items">
          <div className="circular-ring-red"></div>
          <div className="title-name">Balance</div>
          <div className="price new">{available_to_spend.value} {available_to_spend.currency}</div>
        </div>

      </div>
    </div>
  );
}

export default Card;
