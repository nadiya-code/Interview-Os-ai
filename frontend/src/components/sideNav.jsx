import { TbSquareToggle } from "react-icons/tb";
import SideAnchor from "./SideAnchor";
import AppName from "./AppName";

function SideNav(props) {
  return (
    <aside
      className={`${
        props.isOpen ? "w-64" : "w-16"
      } min-h-screen bg-slate-950 text-white flex flex-col transition-all duration-300`}
    >

      {/* App Name + Toggle */}
      <div className="flex items-center justify-between px-3 py-4">
        {props.isOpen && <AppName />}

        <button
          onClick={() => props.setIsOpen(!props.isOpen)}
          className="text-2xl text-white hover:text-blue-400 transition"
        >
          <TbSquareToggle />
        </button>
      </div>

      {/* Navigation */}
      {props.isOpen && (
        <div className="flex-1 px-3 py-4">
          {props.links.map((section) => (
            <div key={section.title} className="mb-6">

              {/* Section title */}
              <p className="px-3 mb-2 text-xs font-semibold text-slate-500">
                {section.title}
              </p>

              {/* Section links */}
              <div className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <SideAnchor
                    key={item.name}
                    link={item.link}
                    end={item.end}
                  >
                    {item.name}
                  </SideAnchor>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Bottom links */}
      {props.isOpen && (
        <div className="border-t border-slate-800 p-3">

          <SideAnchor
            link="/dashboard/settings"
            end
          >
            Settings
          </SideAnchor>

          <SideAnchor
            link="/"
            end
          >
            Logout
          </SideAnchor>

        </div>
      )}

    </aside>
  );
}

export default SideNav;
