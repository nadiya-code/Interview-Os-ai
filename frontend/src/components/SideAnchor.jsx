function SA(props){
  let className=" flex text-2xl m-2 p-2";
  return(
    <a className={className} href={props.link}>{props.children}</a>
 );
}
export default SA;