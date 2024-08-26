"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Elzero Template 3",
    description: "Elzero Template 3 for training on building websites",
    image: "/images/Capture4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alim-99/template-3",
    previewUrl: "https://alim-99.github.io/template-3/",
  },
  {
    id: 2,
    title: "Elzero Dashboard",
    description: "Elzero Dashboard for traning on creating responsive dahsboard",
    image: "/images/Capture2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alim-99/elzero-dashboard",
    previewUrl: "https://alim-99.github.io/elzero-dashboard/",
  },
  {
    id: 3,
    title: "Bondi Website",
    description: "Website for traning on bootstrap",
    image: "/images/Capture5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alim-99/bondi-design",
    previewUrl: "https://alim-99.github.io/bondi-design/",
  },
  {
    id: 4,
    title: "Hangman Game Website",
    description: "Hangman Game for traning on vanila javascript",
    image: "/images/Capture6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/alim-99/hangman_game",
    previewUrl: "https://alim-99.github.io/hangman_game/",
  },
  {
    id: 5,
    title: "Elzero Template 2",
    description: "Kasper Tameplate for training on building web apps",
    image: "/images/Capture3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alim-99/template2",
    previewUrl: "https://alim-99.github.io/template2/",
  },
  {
    id: 6,
    title: "Bootstarp Website",
    description: "Front page for training on bootstrap",
    image: "/images/Capture.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alim-99/front-page",
    previewUrl: "https://alim-99.github.io/front-page/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-32 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;