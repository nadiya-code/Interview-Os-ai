import { FaArrowRightLong } from "react-icons/fa6";
function ButtonAnchor(props){
  return(
    <button className="flex bg-white border m-3 p-3">{props.children}<FaArrowRightLong /></button>
  );
}
export default ButtonAnchor;