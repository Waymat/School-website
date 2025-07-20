import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Admission from './Admission';
import Classes from './Classes';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/admission' element={<Admission/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
