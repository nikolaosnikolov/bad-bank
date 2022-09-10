const Memo = {
    users: [
        // { uid: '2342-23423-23423-23', name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 },
        // { uid: '435-34534-345-3-3', name: 'venny', email: 'venny', password: 'venny', balance: 100 },
    ],
    records: [
        // { datetime: '2022-01-01T12:32:23Z0', uid: '435-34534-345-3-3', user: 'venny', action: 'deposit', amount: 333, balance: 433 }
    ]
}

const Fn = {
    uuidv4: () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
}

function Spa() {
    return (
        <HashRouter>
            <NavBar />
            <UserContext.Provider value={Memo}>
                <div className="container">
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