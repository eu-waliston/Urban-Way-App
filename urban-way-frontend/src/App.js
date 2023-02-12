import React from 'react';

/*utils*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route exatc path='/' element={[<Menu />, <Home />, <Main />, <Prices />]} />
          <Route exatc path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
