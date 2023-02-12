import React from 'react';

/*utils*/

/*Components */
import Menu from './components/Menu';
import Home from './components/Home';
import Main from './components/Main';
import Prices from './components/Prices';

/*Router Components*/
import Login from './components/Login';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Main />
      <Prices />
      <Login />
    </div>
  );
}

export default App;
