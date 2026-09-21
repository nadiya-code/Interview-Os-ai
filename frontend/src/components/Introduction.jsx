import ButtonAnchor from "./ButtonAnchor"
function Introduction(){
  return(
    <div className="flex flex-col min-h-screen justify-start my-5 py-4">
      <p className="text-4xl text-teal-600 my-2 p-3 font-semibold">Technical interview platform</p>
      <h1 className="text-8xl font-bold my-2 p-3">Prepare smarter</h1>
      <h1 className="text-8xl font-bold my-2 p-3">Crack interviews</h1>
      <p className="text-4xl  my-2 p-3 font-semibold">One platform to master DSA, core CS subjects, aptitude, and everything you need for technical interviews.</p>
      <div className="flex">
        <ButtonAnchor background="bg-teal-600" textcolor="text-black">Start Preparing</ButtonAnchor>
        <button className="text-xl font-bold flex  text-white  bg-blue-950 border border-slate-500 m-3 p-5 items-center rounded-md">Explore RoadMap</button>
      </div>
    </div>
  );
}
export default Introduction;