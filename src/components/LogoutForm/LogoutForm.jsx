import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/auth/slice';

export const LogoutForm = () => {
  const userName = useSelector(state => state.auth.userName);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(auth.actions.logout());
  }

  return (
    <>
      <span>
        Loginned as: <b>{userName} </b>
      </span>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
      <br />
    </>
  );
};
