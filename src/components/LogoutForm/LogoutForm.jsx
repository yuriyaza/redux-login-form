import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { userSlice } from 'redux/userSlice';

export const LogoutForm = () => {
  const userName = useSelector(state => state.userState.userName);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(userSlice.actions.logout());
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
