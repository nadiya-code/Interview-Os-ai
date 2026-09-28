import SideAnchor from "./SideAnchor";
import AppName from "./AppName";

function SideNav(props) {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white flex flex-col">

      <AppName />

      <div className="flex-1 px-3 py-4">
        {props.links.map((section) => (
          <div key={section.title} className="mb-6">

            <p className="px-3 mb-2 text-xs font-semibold text-slate-500">
              {section.title}
            </p>

            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <SideAnchor
                  key={item.name}
                  link={item.link}
                >
                  {item.name}
                </SideAnchor>
              ))}
            </div>

          </div>
        ))}

      </div>

      <div className="border-t border-slate-800 p-3">
        <SideAnchor link="/dashboard/settings">
          Settings
        </SideAnchor>

        <SideAnchor link="/">
          Logout
        </SideAnchor>
      </div>

    </aside>
  );
}

export default SideNav;