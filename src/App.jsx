import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer.jsx'
import Header from "./components/Header/Header.jsx"
import Home from './pages/Home/Home.jsx'
import Portfolio from './pages/Portfolio/Portfolio';

function App() {

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
