import { Routes, Route } from "react-router-dom";
import { Forum } from "./Pages/Forum";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";
import Calendar from "./Pages/Calendar";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./Contexts/AuthContext";



const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
