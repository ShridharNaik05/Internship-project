import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="center">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
        />

        <SearchBar />
        <Buttons />
      </div>

      <Footer />
    </div>
  )
}

export default App