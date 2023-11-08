import { Helmet } from "react-helmet-async";
import Signin from "../Components/User/Signin";

const SignInPage = () => {
  return (
    <div>
      <Helmet>
        <title>JobNest | Sign In</title>
      </Helmet>
      <Signin></Signin>
    </div>
  );
};

export default SignInPage;
