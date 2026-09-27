import SA from "./SideAnchor";
import AppName from "./AppName";
function SideNav(props){
  return(
    <nav>
      <div className="flex flex-col items-start bg-black text-white">
        <AppName/>
        <div className="flex flex-col  mx-2 my-2 text-white">
          {props.links.map((item)=>{
            return<SA key={item.name} link={item.link}>{item.name}</SA>
          })}
        </div>
      </div>
    </nav>
  );
}
export default SideNav;