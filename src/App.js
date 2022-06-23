import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Cart } from './Components/Cart/Cart';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { AppState } from './AppContext/AppState'

function App() {

  return (
    <AppState>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />  
        </Routes>   
      </BrowserRouter>
    </AppState>
  );
}

export default App;
