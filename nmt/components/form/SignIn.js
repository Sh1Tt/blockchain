import { useState, useContext } from 'react';
import UserContext from '../context/User';
import Keypair from '../Keypair';

const Form = () => {
  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const authenticate = e => {
    e.preventDefault();
    if (username != '' || password != '') {
      signIn(username, password, JSON.stringify( new Keypair().generatePrivateKey() ) );

    } else {
      setMessage('Please enter your username and password');
    }
  };

  return (
    <form className="sign-in">
      <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      {message != '' && <div className="message">{message}</div>}
      <button className="btn" onClick={e => authenticate(e)}>
        Sign In
      </button>
    </form>
  );
};

export default Form;
