import { useContext } from 'react';
import UserContext from './context/User';

const UserInfo = () => {
  const { user, signOut } = useContext(UserContext);

  return (
    <>
      <p>
      	{user}
  	  </p>
      <button className="button" onClick={signOut}>
        Sign Out
      </button>
    </>
  );
};

export default UserInfo;
