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
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"


function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/category/atv'>
            <Route index element={<CategoryAtv />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='/category/scooter'>
            <Route index element={<CategoryScooter />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='/category/nautical'>
            <Route index element={<CategoryNautical />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='/category/motorcycle'>
            <Route index element={<CategoryMotorcycle />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
