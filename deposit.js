function Deposit() {
    const [deposit, setDeposit] = React.useState(0);
    const [status, setStatus] = React.useState('');
    const [wholeMoney, setWholeMoney] = React.useState(Memo.activeUser ? Memo.activeUser.balance : 0);
    const ctx = React.useContext(UserContext)

    console.log('Memo.activeUser', Memo.activeUser)
    const depositFn = () => {
        if (isNaN(deposit)) {
            toString(deposit)
            console.log('Error in submit: Deposit value is not a number')
            return;
        }
        if (deposit < 0) {
            console.log('Error in submit: User is trying to deposit negative value')
            return;
        }
        if (Memo.activeUser) {
            Memo.activeUser.balance += deposit
            setWholeMoney(Memo.activeUser.balance)
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
       <Card
       bgcolor='secondary'
       header='Deposit'
       status={status}
       body={(
        <>
            <div>{Memo.activeUser ? wholeMoney : 'There is no user logged in'}</div>
            <input placeholder="Deposit's amount" onChange={(e) => setDeposit(parseFloat(e.target.value))}></input>
            <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}></div>
            <button onClick={depositFn}>Deposit</button>
        </>
       )}
       />
    );
}
