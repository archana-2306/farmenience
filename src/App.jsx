import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PageM1 from './pageM1';
import PageM3 from './pageM3';
import PageM4 from "./pageM4";
import PageM5 from "./pageM5";
import PageM11 from "./pageM11";
import PageM12 from "./pageM12";
import PageM17 from "./pageM17";
import PageM18 from "./pageM18";
import PageM19 from './pageM19';
import PageN5 from "./pageN5";
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/M3" element={<PageM19/>} />  
          <Route path="/M12" element={<PageM12/>} />
          <Route path="/M5" element={<PageM5/>} />
          <Route path="/M17" element={<PageM17 />} />
          <Route path="/M18" element={<PageM18 />} />
          <Route path="/M19" element={<PageM19/>} />
          <Route path="/ordersummary" />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
