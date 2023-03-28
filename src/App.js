import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";
import Calendar from "./Pages/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContext } from "./CartContext/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthContext>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </ChakraProvider>
      </AuthContext>
    </div>
  );
};

export default App;
