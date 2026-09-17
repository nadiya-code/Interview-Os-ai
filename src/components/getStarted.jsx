import ButtonAnchor from "./ButtonAnchor";
function getStarted(){
  return(
    <div className="flex flex-col">
      <h1 className="text-orange-700">Ready when you are</h1>
      <h1>Your next interview</h1>
      <h1>starts here.</h1>
      <p>Create your free workspace and get a preparation plan built around your goals.</p>
      <ButtonAnchor>
        Get Started
      </ButtonAnchor>
    </div>
  );
}
export default getStarted;