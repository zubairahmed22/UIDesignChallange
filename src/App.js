
import './App.css';
import { Header } from './Component/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Transactions from './Component/Transactions';
import Bridge from './Component/Bridge';
import Home from './Home';

function App() {
  return (
    <div className="App">
   <Header/>
   
   
    
    <BrowserRouter>
    <Routes>
     
   <Route path="/" element={<Home/>}/>
   <Route path="Bridge" element={<Bridge/>}/>
   <Route path='Transactions' element={<Transactions/>}/>
  
   </Routes>
   
   </BrowserRouter>
   
  
   
    </div>
  );
}

export default App;
