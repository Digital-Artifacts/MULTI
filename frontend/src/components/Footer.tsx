import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    const githubProfileUrl='https://github.com/Digital-Artifacts/MULTI'

  return (
    <footer className='bg-purple-500 p-4' >
    <div className="container mx-auto flex h-8 justify-between items-center">
      <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '9px' }}>
        <FontAwesomeIcon icon={faGithub} />
        <span>Github</span>
      </a>
    </div>
  </footer>
  )
}

export default Footer;
