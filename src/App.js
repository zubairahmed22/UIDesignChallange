
import './App.css';
import { Header } from './Component/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Bridge from './Component/Bridge';
import Home from './Home';
import LeftDiv from './Component/LeftDiv';
function App() {
  return (
    <div className="App">
   <Header/>
   
   
    
    <BrowserRouter>
    <Routes>
     
   <Route path="/" element={<Home/>}/>
   <Route path="Bridge" element={<Bridge/>}/>

   </Routes>
   
   </BrowserRouter>
   
  
   
    </div>
  );
}

export default App;
