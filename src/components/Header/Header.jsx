import { useAuth } from '../../context/AuthContext';

export function Header({ title }) {
  const { isLoggedIn, toggleLogin } = useAuth();

  return (
    <header className="mb-4">
      <h1>{title}</h1>
      <button type="button" className="btn btn-primary" onClick={() => toggleLogin()}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      <p className="mt-4">{isLoggedIn ? "Cool, you're logged in" : "You're not logged in yet"}</p>
    </header>
  );
}
