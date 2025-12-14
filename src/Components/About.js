import './about.css';
import HtmlLogo from '../assets/html.png';
import CssLogo from '../assets/css.png';
import JavaScriptLogo from '../assets/js.png';
import ReactLogo from '../assets/react.png';
import JavaLogo from '../assets/java.png';
import MysqlLogo from '../assets/mysql.png';
import GitLogo from '../assets/git.png';
import GithubLogo from '../assets/github.png';

export default function About(){
    return (
        <div className='about-section'>
            {/* ABOUT SUMMARY */}
            <h2 className='about-title'>About Me</h2>
            <div className='about-line'></div>
            <p className="about-summary">
                I am an aspiring full-stack web developer with a strong interest in
                building responsive, user-friendly, and efficient applications. I enjoy
                transforming ideas into functional digital solutions using clean code
                and modern development practices. My focus is on improving performance,
                designing intuitive interfaces, and continuously expanding my skills in
                both front-end and back-end technologies.
            </p>

            {/* SKILLS SECTION */}
            <h3 className="skills-title">Skills</h3>
            <div className='skills-line'></div>
            <div className='skills-grid'>
                <div className='skill-item'>
                    <img src={HtmlLogo} alt='html' />
                    <span>HTML</span>
                </div>
                <div className='skill-item'>
                    <img src={CssLogo} alt='css' />
                    <span>CSS</span>
                </div>
                <div className='skill-item'>
                    <img src={JavaScriptLogo} alt='javascript' />
                    <span>JavaScript</span>
                </div>
                <div className='skill-item'>
                    <img src={ReactLogo} alt='react' />
                    <span>React.js</span>
                </div>
                <div className='skill-item'>
                    <img src={JavaLogo} alt='java' />
                    <span>Java</span>
                </div>
                <div className='skill-item'>
                    <img src={MysqlLogo} alt='mysql' />
                    <span>MysSQL</span>
                </div>
                <div className='skill-item'>
                    <img src={GitLogo} alt='git' />
                    <span>Git</span>
                </div>
                <div className='skill-item'>
                    <img src={GithubLogo} alt='github' />
                    <span>Github</span>
                </div>
                
            </div>

            {/* CONTACT SECTION */}
            <h3 className="contact-title">Contact Me</h3>
            <div className="contact-line"></div>

            <p className="contact-info">
                If you'd like to collaborate, connect, or discuss opportunities, feel free to reach out:
                <br />
                <strong>
                    <a 
                        className='contact-email'
                        href='mailto:tejraj0177@gmail.com'
                    >
                        tejraj0177@gmail.com
                    </a>
                </strong>
            </p>
        </div>
    );
}