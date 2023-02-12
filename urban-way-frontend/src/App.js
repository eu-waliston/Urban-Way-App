import React from 'react';

/*utils*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Components */
import Menu from './components/Menu';
import Home from './components/Home';
import Main from './components/Main';
import Prices from './components/Prices';
import Footer from './components/Footer';

/*Router Components*/
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exatc path='/' element={[<Menu />, <Home />, <Main />, <Prices />, <Footer />]} />
          <Route exatc path='/login' element={<Login />} />
          <Route exatc path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
