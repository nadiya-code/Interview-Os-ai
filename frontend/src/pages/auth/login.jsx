import { RxQuestionMark } from "react-icons/rx";
import { Link,useNavigate } from "react-router-dom";
import logging from "../../../src/assets/logging.png";
import AppName from "../../components/AppName";
function Login(){
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  return(
    <div className="flex">
      <div className="flex flex-col  justify-center min-h-screen w-1/2 m-3 p-10">
        <AppName/>
        <form  className="flex flex-col"onSubmit={handleSubmit}>
        <input className="m-3 p-3 border w-auto" type="email" name="Email" placeholder="Enter Your Email"></input>
        <input className="m-3 p-3 border border-black w-auto " type="password" name="Password" Placeholder="Enter Your Password"></input>
        <a className="flex items-center justify-end">Forgot Password <RxQuestionMark /></a>
        <button  className="w-auto flex justify-center" type="Submit">Login</button>
        </form>
        <div className="flex justify-center">
          <p className="flex items-center">Don't Have an account <RxQuestionMark /></p>
          <Link to="/signup">Register Here</Link>
        </div>
      </div>
      <div className="flex flex-col min-h-screen w-1/2">
        <img className="min-h-screen w-full " src={logging} alt="Login" />
      </div>
    </div>
  );
}
export default Login;