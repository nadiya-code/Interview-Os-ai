import { ChevronDown } from "lucide-react";
import A from "./Anchor";
import AppName from "./AppName";
function Nav(props){
  return(
    <nav>
      <div className="flex justify-between">
        <AppName/>
        <div className="flex  gap-4 justify-between mx-2">
          {props.children.map((item)=>{
            return<A className="flex" key="item.name" link={item.link} type="items.type">{item.name} {item.icon && <ChevronDown className="m-2 text-2xl"size={16}/>}</A>
          })}
        </div>
      </div>
    </nav>
  );
}
export default Nav;