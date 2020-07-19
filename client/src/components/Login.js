import React from 'react';
import { useForm } from '../hooks/useForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValue = {
  username: '',
  password: ''
};

const Login = props => {
  const [values, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', values)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>UserName:</label>
        <input
          id='username'
          type='text'
          name='username'
          value={values.username}
          onChange={handleChanges}
          placeholder='UserName..'
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChanges}
          placeholder='Password..'
        />
        <button className='submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
