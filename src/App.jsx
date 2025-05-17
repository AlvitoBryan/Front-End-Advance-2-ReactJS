import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "/src/pages/beranda/index.jsx";
import Login from "/src/pages/login/index.jsx";
import Register from "/src/pages/register/index.jsx";
import Profile from "/src/pages/profile/index.jsx";
import '/src/globals.css'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  )
}

export default App