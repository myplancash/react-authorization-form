import React, { useState } from 'react'

const Contact = () => {
  const password = 'sergio';
  const [ authorized, setAuthorized ] = useState(false);


  const handleSubmit = (e) => {
    const enteredPassword = e.target.querySelector("input[type='password']").value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  } 

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder='Password' />
      <input type="submit" />
    </form>
  )

  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.555</li>
    </ul>
  )

  return (
    <div id="authorization">      
      <h1>{!authorized && `Enter the Password` || `Contact`}</h1>
      { authorized ? contactInfo : login }
    </div>
  )
}

export default Contact;