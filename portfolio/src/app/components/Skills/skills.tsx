import type { AppProps } from "next/app";
import { Code, Server, Layout, Database, Terminal, Share2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["TypeScript", "Python", "Java"],
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["React", "HTML5", "CSS3/SASS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["Node.js", "RESTful APIs","Flask API"],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jenkins","SonarQube"],
    },
    {
      title: "Other Skills",
      icon: <Share2 size={24} />,
      skills: [
        "Agile Methodology",
        "Problem Solving",
        "Data Structures",
        "Algorithms",
      ],
    },
  ];

  return (
    <>
      <section id="skills" className="w-full min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-github text-3xl md:text-4xl mb-4">
              My Skills
            </h2>
            <div className="h-1 bg-header w-20 mx-auto" />
            <p className="mx-auto max-w-xl text-desc mt-4">
              I've developed a diverse set of skills throughout my education and
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-header">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-github">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-subhead px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-indigo-100 hover:text-header"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
