import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home'
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
