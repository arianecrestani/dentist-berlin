import { Routes, Route } from "react-router-dom";
import { UserArea } from "./Pages/UserArea";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/RegisterForm";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./Contexts/AuthContext";
import { ResetPassword } from "./Pages/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {/* <Route path="/calendar" element={<Calendar />}></Route> */}
            <Route path="/user" element={<UserArea />}></Route>
            <Route path="/resetPassword" element={<ResetPassword />}></Route>
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
