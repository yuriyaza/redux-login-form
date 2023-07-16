import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogoutForm } from 'components/LogoutForm/LogoutForm';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <LogoutForm />}
      <br />
    </div>
  );
};
