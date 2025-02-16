import './css/main.css'
import './component/NavBar.jsx'
import NavBar from "./component/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./pages/Data.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/data" element={<Data/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App