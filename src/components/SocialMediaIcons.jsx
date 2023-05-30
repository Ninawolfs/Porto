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

  const handleDocumentDownload = () => {
    const documentUrl = process.env.PUBLIC_URL + "/NWolfsCV.pdf";
    const link = document.createElement("a");
    link.href = documentUrl;
    link.setAttribute("download", "NWolfsCV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <button
        className="hover:opacity-50 transition duration-500"
        onClick={handleDocumentDownload}
      >
        <HiOutlineDocumentText size={30} />
      </button>
    </div>
  );
}

export default SocialMediaIcons;
