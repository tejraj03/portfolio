import {Link} from 'react-router-dom';
import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import './navbar.css';

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className='nav-inner'>
                <div className='nav-left'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <a 
                        href = "https://www.linkedin.com/in/tejraj-p-9077332b1"
                        className='icon-linkedin'
                        target='_blank'
                    >
                        <img src={LinkedinIcon} className='icon' />
                    </a>
                    <a 
                        href = "https://github.com/tejraj03"
                        className='icon-github'
                        target='_blank'
                    >
                        <img src={GithubIcon} className='icon' />
                    </a>
                </div>
            </div>
        </nav>
    );
}