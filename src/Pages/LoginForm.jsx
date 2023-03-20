//ra
import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../Components/Inputs";

const LoginForm = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <Inputs />
    </div>
  );
};

export default LoginForm;
