const Memo = {
    users: [
        { name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 },
        { name: 'venny', email: 'venny', password: 'venny', balance: 100 },
    ],
    records: [
        // { datetime: '2022-01-01T12:32:23Z0', user: 'venny', action: 'deposit', amount: 333, balance: 433 }
    ]
}

function Spa() {
    return (
        <HashRouter>
            <NavBar />
            <UserContext.Provider value={Memo}>
                <div className="container" style={{ padding: "20px" }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/withdraw/" component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
                </div>
            </UserContext.Provider>
        </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Spa />)