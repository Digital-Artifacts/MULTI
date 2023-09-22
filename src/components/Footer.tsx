import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    const githubProfileUrl='https://github.com/Digital-Artifacts/MULTI'

  return (
    <div className='bg-purple-500 text-white p-4 flex flex-col  footer'>
        <footer className=''>
        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            <span>Github</span>
        </a>
        </footer>
    </div>
  )
}

export default Footer;
