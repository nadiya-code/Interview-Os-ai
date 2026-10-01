import ButtonAnchor from "./ButtonAnchor";

function Introduction() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20">

      <div className="max-w-5xl">

        {/* Small heading */}
        <p className="mb-5 text-lg font-semibold text-teal-600 md:text-xl">
          Technical interview platform
        </p>

        {/* Main heading */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight
                       text-gray-950 sm:text-6xl md:text-7xl lg:text-8xl">
          Prepare smarter.
          <br />
          Crack interviews.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600
                      md:text-xl lg:text-2xl">
          One platform to master DSA, core CS subjects, aptitude,
          technical skills, and everything you need for technical interviews.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-3">

          <ButtonAnchor
            to="/signup"
            background="bg-teal-500"
            textcolor="text-black"
          >
            Start Preparing
          </ButtonAnchor>

          <ButtonAnchor
            to="/roadmaps"
            background="bg-blue-950"
            textcolor="text-white"
          >
            Explore Roadmap
          </ButtonAnchor>

        </div>

      </div>

    </section>
  );
}

export default Introduction;