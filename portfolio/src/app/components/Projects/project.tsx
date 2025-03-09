
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import EHR from "../../../../public/images/EHR.png";
import { useEffect } from "react";
const projects = [
  {
    id: 1,
    title: "EHR System",
    description:
      "A productivity app with AI-powered task prioritization and smart reminders. Built with React and Node.js.",
    image: "/images/EHR.png",
    tags: ["React", "Node.js", "MySQL", "Express.js"],
    githubUrl: "https://github.com/raveeshavishwajith/TechStrive_Taprobana",
  },
  {
    id: 2,
    title: "Taprobana",
    description:
      "A productivity app with AI-powered task prioritization and smart reminders. Built with React and Node.js.",
    image:
      "/images/taprobana.png",
    tags: ["Typescript", "Node.js", "MongoDB", "Machine Learning", "Python"],
    githubUrl: "https://github.com/raveeshavishwajith/TechStrive_Taprobana",
  },
  {
    id: 3,
    title: "Madhack 3.0 Job Mobile App",
    description:
      "Interactive weather dashboard with real-time data visualization, location-based forecasts, and severe weather alerts.",
    image:
      "/images/job.png",
    tags: ["Flutter"],

    githubUrl: "https://github.com/raveeshavishwajith/madhack_job_app",
  },
  {
    id: 4,
    title: "Madhack 3.0 Volunify Mobile App",
    description:
      "Full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
    image:
      "/images/volunify.png",
    tags: ["Flutter"],

    githubUrl: "https://github.com/raveeshavishwajith/madhack_3.0",
  },
  {
    id: 5,
    title: "Nigehelva AI Content Generator",
    description:
      "Full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
    image:
     "/images/nighelva.jpg",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Typescript",
      "Clerk Authentication",
      "Drizzle studio",
    ],

    githubUrl: "https://github.com/NigeeHettige/Nighelva",
  },
  {
    id: 6,
    title: "Text Emotion Classifier",
    description:
      "Full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
    image:
      "/images/emoclassification.png",
    tags: ["NLP", "Streamlit", "Pandas", "Python", "Pickle"],

    githubUrl:
      "https://github.com/NigeeHettige/DataScienceProjects/tree/main/TextImotionClassification",
  },
  {
    id: 7,
    title: "Movie Recommender",
    description:
      "Full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
    image:
     "/images/movie_recommender.png",
    tags: ["Python", "Streamlit"],

    githubUrl:
      "https://github.com/NigeeHettige/DataScienceProjects/tree/main/MovieRecommenderSystem",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return (
    <section id="projects" className="w-full py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            interests in software development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0  bg-black bg-opacity-25 flex items-center justify-center space-x-4 transition-opacity duration-300">
                    {/* <a
                      // href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
