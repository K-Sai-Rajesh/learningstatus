import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Cart } from './Components/Cart/Cart';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { AppState } from './AppContext/AppState'
import { Archive } from './Components/Archives/Archive';

function App() {

  return (
    <AppState>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />  
          <Route path='/archieve' element={<Archive />} />  
        </Routes>   
      </BrowserRouter>
    </AppState>
  );
}

export default App;
