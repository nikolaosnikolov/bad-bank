function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameMessage, setNameMessage] = React.useState(null);
  const [emailMessage, setEmailMessage] = React.useState(null);
  const [passwordMessage, setPasswordMessage] = React.useState(null);
  // const [disabled, setDisabled] = React.useState(true)
  const ctx = React.useContext(UserContext);

  // const disabledButton = (nameValue, emailValue, passwordValue, button) => {
  //   if (nameValue.value == '' && emailValue.value == '' && passwordValue.value == '') {
  //     button.disabled = true
  //   } else {
  //     button.style.backgroundColor = 'green'
  //     button.style.color = 'white'
  //   }
  // }
  // const validation = (nameValue, emailValue, passwordValue) => {

  // }

  // function validate(field, label) {
  //   if (!field) {
  //     setStatus('Error: ' + label);
  //     setTimeout(() => setStatus(''), 3000);
  //     return false;
  //   }
  //   return true;
  // }

  function handleCreate() {
    // console.log(name, email, password);
    // if (!validate(name, 'name')) return;
    // if (!validate(email, 'email')) return;
    // if (!validate(password, 'password')) return;
    if (name == '' && email == '' && password == '') {
      console.log('submit is disabled')
      setNameMessage('Field is required')
      setEmailMessage('Field is required')
      setPasswordMessage('Field is required')
      setTimeout(() => {
        setNameMessage(null)
        setEmailMessage(null)
        setPasswordMessage(null)
      }, 3000)
      return;
    }
    if (name == '') {
      setNameMessage('Field is required')
      setTimeout(() => {
        setNameMessage(null)
      }, 3000)
    }
    if (email == '') {
      setEmailMessage('Field is required')
      setTimeout(() => {
        setEmailMessage(null)
      }, 3000)
    }
    if (password == '') {
      setPasswordMessage('Field is required')
      setTimeout(() => {
        setPasswordMessage(null)
      }, 3000)
      return;
    }
    if (password.length < 8) {
      setPasswordMessage('Your password must have more than 8 digits')
      setTimeout(() => {
        setPasswordMessage(null)
      }, 3000)
      return;
    }

    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      header="Create Account"
      status={status}
      body={show ? (
        <>
          <input type="input" className="form-control" id="name" placeholder="Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
          <div>{nameMessage}</div>
          <input type="input" className="form-control" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
          <div>{emailMessage}</div>
          <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
          <div>{passwordMessage}</div>
          <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}






//   <div className="card">
//   <div className="card-body">
//     <h5 className="card-title">Create Account</h5>
//     <input className="inputName" placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}></input>
//     {/* <div style={{color: 'red', display: 'none'}}>Name field is required</div> */}
//     <input className="inputEmail" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
//     {/* <div style={{color: 'red', display: 'none'}}>Email field is required</div> */}
//     <input className="inputPassword" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
//     {/* <div style={{color: 'red', display: 'none'}}>Password must be more than 8 characters</div> */}
//     <button className="submitButton" onClick={(e) => {
//       if (name.value == '' && email.value == '' && password.value == '') {
//         setDisabled(true)
//         e.target.disabled = true
//         e.target.className="submitNotDisabled"
//       } else {
//         setDisabled(false)
//         e.target.className="submitDisabled"
//         // button.style.backgroundColor = 'green'
//         // button.style.color = 'white'
//       }
//     }}>Submit</button>
//   </div>
// </div>