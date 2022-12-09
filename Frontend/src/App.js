import './Styles/App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import CategoryAtv from "./Pages/CategoryAtv"
import CategoryScooter from "./Pages/CategoryScooter"
import CategoryNautical from "./Pages/CategoryNautical"
import CategoryMotorcycle from "./Pages/CategoryMotorcycle"
import NotFound from "./Pages/NotFound"


function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/category'>
            <Route index element={<Home />} />
            <Route path='atv' element={<CategoryAtv />} />
            <Route path='scooter' element={<CategoryScooter />} />
            <Route path='nautical' element={<CategoryNautical />} />
            <Route path='motorcycle' element={<CategoryMotorcycle />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
