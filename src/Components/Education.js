import "./education.css";

export default function Education(){
    return (
        <div className="edu-section">
            <h2 className="edu-title">Education Details</h2>
            <div className="edu-line"></div>

            <div className="edu-card-wrapper">
                {/* ===== University Card ===== */}
                <article className="edu-card">
                    <div className="edu-card-left">
                        <h3 className="edu-school">SRM Institute of Science and Technology</h3>
                        <p className="edu-degree">B.Tech · Computer Science and Engineering</p>
                    </div>

                    <div className="edu-card-right">
                        <p className="edu-duration">Jul 2023 - May 2027</p>
                        <p className="edu-extra">CGPA - 9.81 / 10</p>
                    </div>
                </article>

                {/* ===== Class XII Card ===== */}
                <article className="edu-card">
                    <div className="edu-card-left">
                        <h3 className="edu-school small">Sri Chaitanya Techno School</h3>
                        <p className="edu-degree">Class XII - CBSE · mpc · Chennai</p>
                    </div>

                    <div className="edu-card-right">
                        <p className="edu-duration">Aug 2022 - Aug 2023</p>
                        <p className="edu-extra">Percentage - 85.8%</p>
                    </div>
                </article>

                {/* ===== Class X Card ===== */}
                <article className="edu-card">
                    <div className="edu-card-left">
                        <h3 className="edu-school small invisible">Sri Chaitanya Techno School</h3>
                        <p className="edu-degree">Class X - CBSE · mpc · Chennai</p>
                    </div>

                    <div className="edu-card-right">
                        <p className="edu-duration">Aug 2020 - Aug 2021</p>
                        <p className="edu-extra">Percentage - 80.8%</p>
                    </div>
                </article>
            </div>
        </div>
    );
}