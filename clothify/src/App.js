import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import Crad from './pages/Crad';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/card' element={<Crad/>} />
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
