import React from "react";
import {AiFillGithub} from 'react-icons/ai';

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ninawolfs/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 cursor-pointer"
        href="https://github.com/Ninawolfs"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={30}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
