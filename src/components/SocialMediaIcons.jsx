import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

function SocialMediaIcons() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ninawolfs/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Ninawolfs", "_blank");
  };

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 cursor-pointer"
        onClick={handleLinkedInClick}
        rel="noreferrer"
      >
        <AiFillLinkedin size={30} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 cursor-pointer"
        onClick={handleGithubClick}
        rel="noreferrer"
      >
        <AiFillGithub size={30} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineDocumentText size={30} />
      </a>
    </div>
  );
}

export default SocialMediaIcons;



