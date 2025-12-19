import './projects.css';

const projects = [
  {
    title: "Lost & Found Portal",
    github: "https://github.com/tejraj03/lost-and-found-portal",
    tech: "React, Spring Boot, Spring Data JPA, MySQL, REST APIs",
    period: "Dec 2025",
    bullets: [
      "Built a full-stack Lost & Found web application that allows users to upload found items, search for items, and mark items as collected.",
      "Developed RESTful backend APIs using Spring Boot and Spring Data JPA to handle item management and database operations.",
      "Integrated a React frontend with the Spring Boot backend using HTTP requests to enable seamless client–server communication.",
      "Designed and connected a MySQL database for persistent storage of item details, ensuring reliable data handling."
    ]
  },
  {
    title: "University Course Enrollment System",
    github: "https://github.com/tejraj03/uces",
    tech: "HTML, CSS, JavaScript, MySQL",
    period: "Feb 2025 - Apr 2025",
    bullets: [
      "Built a web-based course enrollment platform with distinct roles for Admin, Instructor, and Student.",
      "Enabled dynamic course registration, instructor content management, and admin approval workflows.",
      "Designed secure login and dashboard views for each user role to streamline operations.",
      "Improved course registration efficiency and reduced admin workload through automation."
    ]
  },
  {
    title: "Electricity Billing System",
    github: "",
    tech: "Java Swing, MySQL",
    period: "Aug 2024 - Oct 2024",
    bullets: [
      "Developed a desktop-based electricity billing system with separate roles for Admin and Customers.",
      "Enabled admins to add/view customers, check deposits, and generate billing receipts.",
      "Provided customers with features to update profile info, check usage statements, and make bill payments.",
      "Enhanced user experience through intuitive GUI and real-time database updates."
    ]
  }
];

function ProjectItem({ p }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="proj-title">
          {p.title}
          {p.github && (
            <>
              {" | "}
              <a
                className="proj-github"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
              github
              </a>
            </>
          )}
        </h3>
        <span className="proj-period">{p.period}</span>
      </div>

      <p className="proj-tech">Tech Stack: {p.tech}</p>

      <ul className="proj-list">
        {p.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects Done</h2>
        <div className="projects-line" />

        {/* BIG CARD */}
        <div className="projects-big-card">
          {projects.map((p, idx) => (
            <ProjectItem p={p} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
