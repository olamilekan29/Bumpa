import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="LoginPage" element={<LoginPage/>}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
