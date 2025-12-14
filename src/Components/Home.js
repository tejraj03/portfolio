import './home.css';
import ProfileImg from '../assets/profile.png';

export default function Home(){
    return (
        <div className='home'>
            <div className='home-left'>
                <h1>Hello, I'm Tejraj</h1>
                <p>
                    Motivated web developer with a solid foundation in full-stack
                    development using HTML, CSS, JavaScript and React. Experienced in
                    building responsive, user-friendly applications with a strong focus on
                    performance and clean code. Eager to contribute to modern web solutions
                    through effective front-end and back-end development.
                </p>
            </div>
            <div className="home-right">
                <img src={ProfileImg} alt="Profile" className="profile-img" />
            </div>
        </div>
    );
}