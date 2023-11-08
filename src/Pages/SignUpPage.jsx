import { Helmet } from "react-helmet-async";
import Signup from "../Components/User/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <Helmet>
        <title>JobNest | Sign Up</title>
      </Helmet>
      <Signup></Signup>
    </div>
  );
};

export default SignUpPage;
