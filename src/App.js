import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Education from './Components/Education.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/education' Component={Education} />
          <Route path='/projects' Component={Projects} />
          <Route path='/about' Component={About} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
