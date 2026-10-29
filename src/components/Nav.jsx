import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import AppName from "./AppName";
import ButtonAnchor from "./ButtonAnchor";

function Nav({ links }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <AppName />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="flex items-center rounded-lg px-4 py-2 text-sm
                         font-medium text-gray-200 transition
                         hover:bg-gray-800 hover:text-white"
            >
              {item.name}

              {item.icon && (
                <ChevronDown
                  size={16}
                  className="ml-1"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Get Started */}
        <ButtonAnchor
          to="/signup"
          background="bg-teal-500"
          textcolor="text-black"
        >
          Get Started
        </ButtonAnchor>

      </div>
    </nav>
  );
}

export default Nav;