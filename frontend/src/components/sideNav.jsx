import { TbSquareToggle } from "react-icons/tb";
import SideAnchor from "./SideAnchor";
import AppName from "./AppName";

function SideNav({ links, isOpen, setIsOpen }) {
  return (
    <aside
      className={`
        flex h-screen flex-col
        bg-slate-950 text-white
        transition-all duration-300
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Header */}
      <div
        className={`
          flex h-16 shrink-0 items-center
          border-b border-slate-800
          ${isOpen ? "justify-between px-4" : "justify-center"}
        `}
      >
        {isOpen && (
          <div className="overflow-hidden whitespace-nowrap">
            <AppName />
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            rounded-lg p-2
            text-xl text-slate-300
            transition
            hover:bg-slate-800
            hover:text-white
          "
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <TbSquareToggle />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {links.map((section) => (
          <div key={section.title} className="mb-7">

            {isOpen && (
              <p className="mb-2 px-3 text-xs font-semibold tracking-wider text-slate-500">
                {section.title}
              </p>
            )}

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
      </nav>

      {/* Bottom */}
      <div className="shrink-0 border-t border-slate-800 p-3">
        {isOpen && (
          <div className="flex flex-col gap-1">
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
      </div>
    </aside>
  );
}

export default SideNav;