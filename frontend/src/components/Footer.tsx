import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  
  const githubProfileUrl='https://github.com/Digital-Artifacts/MULTI'
  return (
    <>
    {/* <body class="flex flex-col min-h-screen">

<footer class="mt-auto"> */}
      <div className=" pt-4 sm:pt-10 lg:pt-12">
        

        <footer className="max-w-screen-4xl px-4 md:px-8 mx-auto mt-auto bg-purple-500 ">
        <div className="container mx-auto flex h-4 justify-between items-center">
     
    </div>

          <div className="text-white text-sm text-start flex py-8 justify-between">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '9px' }}>
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </a>
            <div className="flex">
              <h1>Privacy Policy</h1>{" "}
              <h1 className="ml-4"> Terms and Conditions</h1>
            </div>
            <div>Copyright © 2023 Multi</div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Footer;