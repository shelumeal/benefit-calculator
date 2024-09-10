
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Search from './pages/Search/Search'
import Rules from './pages/Rules/Rules'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Rules" element={<Rules />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
