import { ChevronDown } from "lucide-react";
function A(props){
  let className=" flex  items-center  justify-between no-underline text-2xl m-2 p-2";
  if(props.type==="login"){
    className+="border-2 border-black p-2 rounded-lg"
  }
  else if(props.type==="signup"){
    className += " bg-black text-white  p-2 rounded-lg";
  }
  return(
    <a className={className} href={props.link}>{props.children}</a>
 );
}
export default A;