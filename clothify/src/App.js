import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import Crad from './pages/Crad';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import AddItem from './pages/AddItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/card' element={<Crad/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/addItem' element={<AddItem/>} />
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
