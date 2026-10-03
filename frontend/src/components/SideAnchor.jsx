import { NavLink } from "react-router-dom";

function SideAnchor({ link, children, end = false }) {
  return (
    <NavLink
      to={link}
      end={end}
      className={({ isActive }) =>
        `
        flex items-center rounded-lg px-3 py-2.5
        text-sm font-medium
        transition duration-200
        ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
        `
      }
    >
      {children}
    </NavLink>
  );
}

export default SideAnchor;