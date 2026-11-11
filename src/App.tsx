
import './Css/main.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import {useEffect} from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Product from './components/main/Product'
import ProductDetails from './components/main/ProductDetails'
import PrivacyPolicy from './components/main/PrivacyPolicy'

import CookieBanner from "./components/layout/CookieBanner";

function Home() {

  return (
    <>
      <Header />
      <main>
        <Product id="monthly" class="product--horizontal" title="Monthly Planners" category="monthly"/>
        <Product id="medication" title="Medication tracker" category="pills"/>
        <Product id="weekly" title="Weekly Planners" category="weekly"/>
        <Product id="daily" title="Daily Planners" category="daily"/>
        <Product id="workout" title="Workout" category="workout"/>
        <Product id="wallpapers" class="product__item--sml" title="Wallpapers" category="wallpapers"/>
      </main>
      <Footer />
    </>
  )
}

function App() {
 const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
     <CookieBanner />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route
          path="/privacy-policy"
          element={
             <>
             <Header />
            <main>
             <PrivacyPolicy />
            </main>
            <Footer />
          </>
        }
        />
      <Route
        path="/product/:slug"
        element={
          <>
          <Header />
            <main>
              <ProductDetails />
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
    </>
  )
}

export default App