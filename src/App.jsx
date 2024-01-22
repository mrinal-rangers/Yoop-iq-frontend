import Login from './Components/Login'
import About from './Components/About';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer' 
import Signup from './Components/Signup';
import Pricing from './Components/Pricing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      <Footer/>  
      </div>
    </Router>
  );
};

export default App;

