import React, { useState } from 'react';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setDisplayName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className='SignUp' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type='text'
        name='displayName'
        placeholder='Display Name'
        value={displayName}
        onChange={event => setDisplayName(event.target.value)}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <input type='submit' value='Sign Up' />
    </form>
  );
};

export default SignUp;
