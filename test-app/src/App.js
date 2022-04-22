import React from 'react';
import './App.css';
import { useIdentity } from 'react-deso';
import { useReducer } from 'react';

function App() {
  const { login, logout } = useIdentity();

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      loggedIn: false,
      user: {},
    },
  );

  const handleLogin = async () => {
    try {
      const user = await login();
      setState({ loggedIn: !state.loggedIn, user });
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    try {
      await logout(state.user.key);
      setState({ loggedIn: !state.loggedIn, user: {} });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!state.loggedIn ? (
          <button onClick={handleLogin}>Login to DeSo</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </header>
    </div>
  );
}

export default App;
