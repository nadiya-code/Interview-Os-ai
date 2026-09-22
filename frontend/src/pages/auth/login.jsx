import { RxQuestionMark } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import ButtonAnchor from "../../components/ButtonAnchor";
import { useNavigate } from "react-router-dom";
import logging from "../../../src/assets/logging.png"
function Login(){
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  return(
    <div className="flex min-h-screen">
      <div>
        <form onSubmit={handleSubmit}>
        <input className="" type="email" name="Email" placeholder="Enter Your Email"></input>
        <input className="" type="password" name="Password" Placeholder="Enter Your Password"></input>
        <a>Forgot Password <RxQuestionMark /></a>
        <button  className=" " type="Submit">Login</button>
        </form>
        <div>
          <p>Don't Have an account <LuDot /><LuDot /><RxQuestionMark /></p>
          <ButtonAnchor>Create account</ButtonAnchor>
        </div>
      </div>
      <div>
        <img src={logging}></img>
      </div>
    </div>
  );
}
export default Login;