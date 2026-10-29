import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function ButtonAnchor({
  children,
  to = "#",
  background = "bg-blue-950",
  textcolor = "text-white",
}) {
  return (
    <Link
      to={to}
      className={`
        inline-flex items-center justify-center
        rounded-lg border border-transparent
        px-5 py-3
        text-sm font-bold
        transition duration-200
        hover:-translate-y-0.5
        hover:shadow-lg
        ${background}
        ${textcolor}
      `}
    >
      <span>{children}</span>

      <FaArrowRightLong className="ml-2 text-xs" />
    </Link>
  );
}

export default ButtonAnchor;