import "../styles/projects.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import project1 from "../assets/drivo/drivo-logo.png";
import project2 from "../assets/bitebite/bitebite-logo.png";
import project3 from "../assets/profile-manager/profile-manager-logo.png";
import project4 from "../assets/cos/COS-logo.png";
import project5 from "../assets/platinumgroup/platinumgroup-logo.png";
import project6 from "../assets/exxtra/logo.png";
import project7 from "../assets/portfolio/Logo.png";
import project8 from "../assets/components/logo.png";

const projects = [
  {
    id: 1,
    title: "Drivo",
    category: "Ride Sharing Mobile App",
    image: project1,
    description:
      "A ride-sharing mobile application designed to simplify daily commuting with real-time ride tracking, seamless booking, and a clean user experience.",
    year: "2025",
    role: "UI/UX Designer",
  },
  {
    id: 2,
    title: "BiteBite",
    category: "Food Delivery Mobile App",
    image: project2,
    description:
      "A modern food delivery app that helps users discover restaurants, browse menus, and order meals quickly with an intuitive and smooth ordering flow.",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "Profile Manager",
    category: "Web Application",
    image: project3,
    description:
      "A web-based profile management system that allows users to securely manage personal information, account settings, and digital profiles in one place.",
    year: "2024",
    role: "Product Designer",
  },
  {
    id: 4,
    title: "COS",
    category: "Clothing E-commerce App",
    image: project4,
    description:
      "A modern fashion shopping experience where users can browse clothing collections, explore product details, and purchase items with a minimal interface.",
    year: "2023",
    role: "UI Designer",
  },
  {
    id: 5,
    title: "Platinum Group",
    category: "Real Estate Mobile App",
    image: project5,
    description:
      "A real estate mobile platform that helps users discover properties, explore listings with rich visuals, and connect with agents seamlessly.",
    year: "2023",
    role: "UX Designer",
  },
  {
    id: 6,
    title: "Crypto Dashboard",
    category: "Web Dashboard",
    image: project6,
    description:
      "A data-driven cryptocurrency dashboard that visualizes market trends, portfolio analytics, and real-time price tracking in a modern interface.",
    year: "2022",
    role: "Frontend Developer",
  },
  {
    id: 7,
    title: "Portfolio",
    category: "Personal Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website designed to showcase projects, case studies, and creative work through a clean and engaging digital experience.",
    year: "2022",
    role: "Product Designer",
  },
  {
    id: 8,
    title: "Components",
    category: "Responsive UI Components",
    image: project8,
    description:
      "A collection of reusable responsive UI components built for modern web interfaces, focusing on scalability, accessibility, and consistent design.",
    year: "2021",
    role: "UI Designer",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // ✅ useEffect is INSIDE the component — this is the correct place
  useEffect(() => {
    if (sessionStorage.getItem("scrollToContact")) {
      sessionStorage.removeItem("scrollToContact");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      {/* SECTION TITLE */}
      <div id="projects">
        <div className="projects-content">
          <div className="projects-title">
            <h2>Select Work</h2>
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-img">
              <img src={project.image} alt={project.title} />
              <div className="card-arrow">↗</div>
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="project-modal active"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="modal-top">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <span className="modal-tag">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <div className="modal-meta">
                <div>
                  <span>Year</span>
                  <strong>{selectedProject.year}</strong>
                </div>
                <div>
                  <span>Role</span>
                  <strong>{selectedProject.role}</strong>
                </div>
                <div>

                </div>
                <button
                  className="case-study"
                  onClick={() => navigate(`/project/${selectedProject.id}`)}
                >
                  View Case Study →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="section-gap">
        <hr className="section-divider" />
      </div>
    </>
  );
}

export default Projects;