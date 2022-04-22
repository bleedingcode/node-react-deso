import React from 'react';
import './App.css';
import { useIdentity } from 'react-deso';

function App() {
  const { login } = useIdentity();

  const handleLogin = async () => {
    const user = await login();
    console.log(user);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleLogin}>Login to DeSo</button>
      </header>
    </div>
  );
}

export default App;
