import { useDispatch } from 'react-redux';
import { userSlice } from 'redux/userSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();

    const userName = e.target.elements.userName.value;
    dispatch(userSlice.actions.login(userName));

    e.target.reset();
  };

  return (
    <form onSubmit={handleLogin}>
      <input name='userName' type='text' />
      <span>&nbsp;</span>
      <button type='submit'>Login</button>
    </form>
  );
};
