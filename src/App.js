import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Cart } from './Components/Cart/Cart';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { AppState } from './AppContext/AppState'
import { Archive } from './Components/Archives/Archive';
import TimeZones from './Components/TimeZone/TimeZone';
import Data from './Components/Data/Data';
import { Profile } from './Components/AddProfile/AddProfile';
import { NewProfile } from './Components/EditProfile/EditProfile';
import { Parent } from './AppContext/ParentToChild';

function App() {

  return (
    <AppState>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />  
          <Route path='/archieve' element={<Archive />} />  
          <Route path='/timezones' element={<TimeZones />} />  
          <Route path='/data' element={<Data />} />    
          <Route path='/profile' element={<Profile />} />  
          <Route path='/profile/:id' element={<NewProfile />} />  
          <Route path='/parentchild' element={<Parent />} />  
        </Routes>   
      </BrowserRouter>
    </AppState>
  );
}

export default App;
