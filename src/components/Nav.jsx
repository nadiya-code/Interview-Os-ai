function Nav(props){
  return(
    <nav>
      <div className="flex justify-between">
        <div>Interview Os</div>
        <div className="flex ">
          {props.children.map((item)=>{
            <A>{item}</A>
            {if(item.icon==true){
              <ChevronDown />
            }}
          })}
        </div>
      </div>
    </nav>
  );
}
export default Nav;