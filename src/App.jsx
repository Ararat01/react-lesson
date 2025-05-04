import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer.jsx'
import Header from "./components/Header/Header.jsx"

function App() {

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<>home page</>}></Route>
        <Route path='/portfolio' element={<>portfolio page</>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
