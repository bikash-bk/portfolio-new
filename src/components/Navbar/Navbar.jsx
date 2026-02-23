import React, { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState("");

  const scrollTosection = (id) => {

    setActive(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="main">
        <div className="name">
          <span style={{ color: "blue" }}>&lt;</span>

          <span style={{ color: "yellow", fontSize: "20px" }}>
            &nbsp;Bikash
          </span>
          <span style={{ color: "blue" }}>&nbsp;/</span>
          <span>&nbsp;Kumar</span>
          <span style={{ color: "blue" }}>&nbsp;&gt;</span>
        </div>

        <div className="main-ul">
          <ul>
            <li onClick={() => scrollTosection("about") } 
            
            >About</li>

            <li onClick={() => scrollTosection("skills")}
             style={{color:active==="skills"?"blueViolet":""}}
             >Skills</li>

            <li onClick={() => scrollTosection("experience")}
             style={{color:active==="experience"?"blueViolet":""}}
             >Experience</li>

            <li onClick={() => scrollTosection("project")}
             style={{color:active==="project"?"blueViolet":""}}
             >Projects</li>

            <li onClick={() => scrollTosection("education")}
             style={{color:active==="education"?"blueViolet":""}}
             >Education</li>

          </ul>
        </div>

        <div className="main-right">
          <a href="https://github.com/bikash-bk" target="_blank">
            <FaGithub
              className="github"
              size={24}
              style={{ marginTop: "10px" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/bikash-das-436425297"
            target="_blank"
          >
            <FaLinkedin
              className="linkdln"
              size={24}
              style={{ marginTop: "10px", paddingLeft: "20px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
