import { Route, Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Man from "./pages/Man"
import Woman from "./pages/Woman"
import Error from "./pages/Error"


function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<AboutUs/>} />
      <Route path="/Man" element={<Man/>} />
      <Route path="/Woman" element={<Woman/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </>
  )
}

export default App
