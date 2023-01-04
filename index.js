const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main_heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profilepic"
      />

      <h1 className="heading">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>

      <img
        className=""
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
