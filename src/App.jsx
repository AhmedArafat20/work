import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import OurServe from './Pages/services/OurServe';


function App() {
  return (
    <>
       <Helmet>
        <html lang="ar" dir="rtl" />
      </Helmet>
    <Navbar />
      <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path="/ourserve" element={<OurServe />} />
        </Routes>
      
     
      
       
      
        <Footer />
     

    </>
  );
}

export default App;
