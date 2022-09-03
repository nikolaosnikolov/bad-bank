function Withdraw() {
  const [withdraw, setWithdraw] = React.useState(0)
  const ctx = React.useContext(UserContext);

  const withdrawfn = () => {
    if (Memo.activeUser) {
      Memo.activeUser.balance -= withdraw
      console.log('newDeposit', Memo.activeUser.balance)

      const record = {
        datetime: new Date().toISOString(),
        user: Memo.activeUser.name,
        action: 'withdraw',
        amount: withdraw,
        balance: Memo.activeUser.balance
      }

      Memo.records.push(record)
    } else {
      console.log('user must log in')
    }
  }
  return (
    <>
      <input placeholder="Withdraw" onChange={(e) => setWithdraw(parseFloat(e.target.value))}></input>
      <button onClick={withdrawfn}>Withdraw</button>
    </>
  );
}