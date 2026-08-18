
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
      <Product title="Monthly Planners" category="monthly"/>
      <Product title="Daily Planners" category="daily"/>
      <Product title="Workout" category="workout"/>
      <section id="center">
      
        <div>
         
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>

    </main>
    <Footer/>
    </>
  )
}

export default App
