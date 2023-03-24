
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonials';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <NavbarComp/>
        <Herosection/>
        <Highlights/>
        <Testimonial/>
        <Aboutme/>
        <Footer/>
    </div>
  );
}

export default App;
