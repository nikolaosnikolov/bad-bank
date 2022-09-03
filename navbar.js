function NavBar() {
  // const highlight = (eventHome, eventAccount, ) => {
  //   event.target.style.fontWeight = '700'
  //   event.target.style.color = 'white'
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a id="home-nav" className="nav-link" href="#/">Home</a>
            </li>
            <li className="nav-item">
              <a id="createaccount-nav" className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a id="login-nav" className="nav-link" href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a id="deposit-nav" className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a id="withdraw-nav" className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a id="alldata-nav" className="nav-link" href="#/alldata/">AllData</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}