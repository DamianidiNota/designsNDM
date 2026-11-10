
import './Css/main.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Product from './components/main/Product'
import ProductDetails from './components/main/ProductDetails'

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
        <Product id="wallpapers" title="Wallpapers" category="wallpapers"/>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
  )
}

export default App