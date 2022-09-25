function NavBar() {
  const [clicked, setClicked] = React.useState('')

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
              <a id="home-nav" className="nav-link" href="#/" onClick={(e) => {
                clicked != '' && (clicked.style.color = 'black')
                setClicked(e.target)
                e.target.style.color = 'white'
              }}>Home</a>
            </li>
            <li className="nav-item">
              <a id="createaccount-nav" className="nav-link" href="#/CreateAccount/" onClick={(e) => {
                clicked != '' && (clicked.style.color = 'black')
                setClicked(e.target)
                e.target.style.color = 'white'
              }}>Create Account</a>
            </li>
            <li className="nav-item">
              <a id="deposit-nav" className="nav-link" href="#/deposit/" onClick={(e) => {
                clicked != '' && (clicked.style.color = 'black')
                setClicked(e.target)
                e.target.style.color = 'white'
              }}>Deposit</a>
            </li>
            <li className="nav-item">
              <a id="withdraw-nav" className="nav-link" href="#/withdraw/" onClick={(e) => {
                clicked != '' && (clicked.style.color = 'black')
                setClicked(e.target)
                e.target.style.color = 'white'
              }}>Withdraw</a>
            </li>
            <li className="nav-item">
              <a id="alldata-nav" className="nav-link" href="#/alldata/" onClick={(e) => {
                clicked != '' && (clicked.style.color = 'black')
                setClicked(e.target)
                e.target.style.color = 'white'
              }}>AllData</a>
            </li>
          </ul>
          <a style={{
            right: '0',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" href="#/login/">Login</a>
          <a style={{
            right: '50px',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" href="#/" onClick={() => {
            Memo.activeUser && delete Memo.activeUser
          }}>Logout</a>
        </div>
      </nav>
    </>
  );
}