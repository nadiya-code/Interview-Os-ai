import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { footerSections } from "../model/FooterLinks";

function Footer({ login = false }) {
  return (
    <footer className="bg-blue-950 text-white">

      {/* Footer Links */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4">

        {footerSections.map((section) => (
          <div key={section.title}>

            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
              {section.title}
            </h3>

            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        ))}

      </div>

      {/* Brand */}
      <div className="border-t border-blue-900 px-6 py-8">
        <h1 className="text-center text-[12vw] font-extrabold leading-none tracking-tighter md:text-[9vw]">
          INTERVIEW-OS-AI
        </h1>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-blue-900 px-6 py-5 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

        <p>
          © {new Date().getFullYear()} InterviewOS AI, Inc.
          All rights reserved.
        </p>

        <div className="flex items-center">

          {!login && (
            <>
              <Link
                to="/login"
                className="transition hover:text-white"
              >
                Login
              </Link>

              <LuDot />
            </>
          )}

          <span>
            All Systems Operational
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;