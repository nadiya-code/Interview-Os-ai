import {Link} from "react-router-dom";
import { LuDot } from "react-icons/lu";
import {footerSections} from "../model/FooterLinks"
function Footer(props){
  return(
    <footer className="flex flex-col bg-blue-950 text-white">
      <div className="flex justify-evenly">
        {footerSections.map((section,idx)=>(
          <div key={idx}>
            <h3 className="font-bold">{section.title}</h3>
            <div className="flex flex-col">
              {section.links.map((link,linkidx)=>(
                <a key={linkidx} href={link.href}><span>{link.label}</span></a>
              ))}
            </div>
          </div>
        )
        )}
      </div>
      <div>
        <h1 className="w-full bg-blue-950 text-white text-center font-extrabold text-[10vw] leading-none py-4">
          INTERVIEW-OS-AI
        </h1>
      </div>
      <div className="flex  items-center justify-between w-full">
        <div className="flex justify-start">
          <p>© {new Date().getFullYear()} InterviewOS AI, Inc. All rights reserved.</p>
        </div>
        <div className="flex items-center">
          { !props.login &&
            <div className="flex items-center justify-start">
              <Link to="/login">Login</Link>
              <span><LuDot></LuDot></span>
            </div>
          }
          <span className="flex justify-end m-4">All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
