import { NavLink } from "react-router-dom";
function SideAnchor({ link, children, end = false }) {
  return (
    <NavLink
      to={link}
      end={end}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default SideAnchor;
