import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import LinkItem from './LinkItem';

const Links = () => {
  return (
    <div className='flex flex-col justify-center items-center p-8'>
        <ul>
            <li>
                <LinkItem
                    icon={<FaGithub />}
                    label="GitHub"
                    href="https://github.com/BasmalaMohamedd"
                />
            </li>
            <li>
                <LinkItem
                    icon={<FaLinkedin />}
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/basmala-hussein-95120421a"
                />
            </li>
            <li>
                <LinkItem
                    icon={<FaDownload />}
                    label="Resume"
                    href="/path/to/resume.pdf"
                    download
                />
            </li>
        </ul>
    </div>
  )
        
}

export default Links
