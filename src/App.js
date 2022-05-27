import logo from './logo.svg';
import './components/common.css';
import './App.css';
import SignUp from './components/Sign/Signup';
import Card from './components/Card/Card';
import List from './components/List/List';
import Signin from './components/Sign/Signin';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import CV from './components/CV/CV';
import data from "./data.json"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CV user={data.user} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/list' element={<List />} />
        <Route path='/card' element={<Card />} />
      </Routes>
      <footer className='app__footer'>
        <NavLink to='signin' className='footer__link'>link</NavLink>
        <NavLink to='signup' className='footer__link'>link</NavLink>
        <NavLink to='list' className='footer__link'>link</NavLink>
        <NavLink to='card' className='footer__link'>link</NavLink>
      </footer>


    </BrowserRouter>
  );
}

export default App;
