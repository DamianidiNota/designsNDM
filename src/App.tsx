
import './Css/main.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Product from './components/main/Product'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main>
      <Product id="monthly" class="product--horizontal" title="Monthly Planners" category="monthly"/>
      <Product id="medication" title="Medication tracker" category="pills"/>
      <Product id="weekly" title="Weekly Planners" category="weekly"/>
      <Product id="daily" title="Daily Planners" category="daily"/>
      <Product id="workout" title="Workout" category="workout"/>
    <Product id="wallpapers" title="Wallpapers" category="wallpapers"/>

      

    </main>
    <Footer/>
    </>
  )
}

export default App
