import React from "react";
import Inputs from "../Components/Inputs";
import Link from './Home'

const Register = () => {
  return (
    <div>
      <Inputs />
      <Link to={`/`}>Home</Link>
    </div>
  );
};

export default Register;
