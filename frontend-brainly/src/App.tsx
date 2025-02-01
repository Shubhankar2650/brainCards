import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App