function Nav(props){
  return(
    <nav className="flex justify-between items-center px-6 py-4">
      <WebsiteName/>
      {props.children.map((items)=>{
        <Nav-item>{item}</Nav-item>
      })}
    </nav>
  );
}