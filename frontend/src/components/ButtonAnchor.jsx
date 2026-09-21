import { FaArrowRightLong } from "react-icons/fa6";
function ButtonAnchor(props){
  return(
    <button className={`flex ${props.background} ${props.textcolor} text-xl font-bold border m-3 p-2 items-center rounded-md justify-center`}><span>{props.children}</span><FaArrowRightLong className="mx-2 text-base relative top-[1px]"></FaArrowRightLong></button>
  );
}
export default ButtonAnchor;