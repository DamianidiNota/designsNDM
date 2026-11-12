
import './Css/main.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import {useEffect} from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Product from './components/main/Product'
import ProductDetails from './components/main/ProductDetails'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import About from './components/Pages/About'
import CookieBanner from "./components/layout/CookieBanner";
import Daily from './components/Pages/Daily'
import Monthly from './components/Pages/Monthly'
import Medication from './components/Pages/Medication'
import Workout from './components/Pages/Workout'
import Weekly from './components/Pages/Weekly'
import Wallpapers from './components/Pages/Wallpapers'

function Home() {

  return (
    <>
      <Header />
      <main>
        <Product id="monthly" class="product--vertical" title="Monthly Planners" category="monthly" ishome/>
        <Product id="medication" class="product--horizontal" title="Medication tracker" category="pills" ishome/>
        <Product id="weekly" class="product--horizontal" title="Weekly Planners" category="weekly" ishome/>
        <Product id="daily" class="product--horizontal" title="Daily Planners" category="daily" ishome/>
        <Product id="workout" class="product--horizontal" title="Workout" category="workout" ishome/>
        <Product id="wallpapers" class="product--grid2" title="Wallpapers" category="wallpapers" ishome/>
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
          path="/about"
          element={
             <>
             <Header />
            <main>
             <About />
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
    
    <Route
          path="/daily"
          element={
             <>
             <Header />
            <main>
             <Daily />
            </main>
            <Footer />
          </>
        }
        />
    <Route path="/monthly" element={
             <>
             <Header />
            <main>
             <Monthly />
            </main>
            <Footer />
          </>
        }
        />
        <Route path="/medication" element={
             <>
             <Header />
            <main>
             <Medication />
            </main>
            <Footer />
          </>
        }
        />
        <Route path="/workout" element={
             <>
             <Header />
            <main>
             <Workout />
            </main>
            <Footer />
          </>
        }
        />
        <Route path="/weekly" element={
             <>
             <Header />
            <main>
             <Weekly />
            </main>
            <Footer />
          </>
        }
        />
        <Route path="/wallpapers" element={
             <>
             <Header />
            <main>
             <Wallpapers />
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