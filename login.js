

function Login() {
    const [emailValue, setEmail] = React.useState(null)
    const [passwordValue, setPassword] = React.useState(null)
    const [authUser, setUser] = React.useState(null)
    console.log('Memo', Memo)

    const ctx = React.useContext(UserContext);
    const authentication = () => {
        const user = ctx.users.find(item => {
            const { name, email, password, balance } = item
            return emailValue === email && passwordValue === password
        })

        if (user === undefined) {
            console.log('User cannot be authenticated')
            return
        }

        Memo.activeUser=user
        console.log('user data', Memo.activeUser)

    }
    return (
        <>
            <input id="emailInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            <input id="passwordInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={authentication}>Submit</button>
        </>
    );
}
