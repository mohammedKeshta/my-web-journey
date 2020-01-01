import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <form className='SignIn' onSubmit={handleSubmit}>
      <h2>Sign In</h2>
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
      <input type='submit' value='Sign In' />
      <button>Sign In With Google</button>
    </form>
  );
};

export default SignIn;
