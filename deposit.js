function Deposit() {
    const [deposit, setDeposit] = React.useState(0)
    const ctx = React.useContext(UserContext)

    console.log('Memo.activeUser', Memo.activeUser)
    const depositfn = () => {
        if (Memo.activeUser) {
            Memo.activeUser.balance += deposit
            console.log('newDeposit', Memo.activeUser.balance)

            const record = {
                datetime: new Date().toISOString(),
                user: Memo.activeUser.name,
                action: 'deposit',
                amount: deposit,
                balance: Memo.activeUser.balance
            }
            console.log('record', record)
            Memo.records.push(record)
            console.log('Memo.records', Memo.records)
        } else {
            console.log('user must log in')
        }
    }
    return (
        <>
            <input placeholder="Deposit" onChange={(e) => setDeposit(parseFloat(e.target.value))}></input>
            <button onClick={depositfn}>Deposit</button>
        </>
    );
}
