import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Best from './pages/Best';
import Footer from './Components/footer/footer';
import Management from './pages/Management';
import University from './pages/University';
import Medical from './pages/Medical';
import Engineering from './pages/Engineering';
import Pharmacy from './pages/Pharmacy';
import Details from './Components/Details/details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='section-first'>
          <Navbar/>
          <Routes>
            <Route path="/CollegeVerse/" element={<Best />}></Route>
            <Route path="/University" element={<University/>}></Route>
            <Route path="/Engineering" element={<Engineering/>}></Route>
            <Route path="/Medical" element={<Medical/>}></Route>
            <Route path="/Management" element={<Management/>}></Route>
            <Route path="/Pharmacy" element={<Pharmacy/>}></Route>
            <Route path="/details/:Category/:id" element={<Details/>}></Route>
          </Routes>
        </div> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
