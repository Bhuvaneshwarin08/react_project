import  Navbar  from "./component/navbar";
import  Footer  from "./component/footer";
import  Home  from "./component/home";
import Product from './component/products';
import About from './component/About';
import Contact from './component/contact';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Watch from './component/watch';
import Camera from './component/camera';
import Headphone from './component/Headphone';
import WatchDetail from './component/watchproddetail';
import PhoneDetail from './component/phonedetails';
import CamDetail from './component/camdetails';
import Phone from './component/phone';
import Cart from './component/cart';

import { Navigate, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About/>}/>
         <Route path="/Products" element={<Product/>}/> 
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/SignUp" element={<SignUp/>}/>
         <Route path="/watch" element={<Watch/>}/>
         <Route path="/camera" element={<Camera/>}/>
         <Route path="/HeadPhone" element={<Headphone/>}/>
         <Route path="/watch/:id" element={<WatchDetail/>}/>
         <Route path="/camera/:id" element={<CamDetail/>}/>
         <Route path="/Phone/:id" element={<PhoneDetail/>}/>
         <Route path="/Phone" element={<Phone/>}/>
         <Route path="/cart" element={<Cart/>}/>
         
         <Route path="/" element={<Navigate replace path="/"/>} />
       </Routes>
       <Footer/>
    </>
    
  );
}

export default App;
