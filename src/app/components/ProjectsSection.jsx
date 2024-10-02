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
    imageUrl: "/images/Capture4.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/template-3",
    previewUrl: "https://alim-99.github.io/template-3/",
  },
  {
    id: 2,
    title: "Elzero Dashboard",
    description: "Elzero Dashboard for traning on creating responsive dahsboard",
    imageUrl: "/images/Capture2.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/elzero-dashboard",
    previewUrl: "https://alim-99.github.io/elzero-dashboard/",
  },
  {
    id: 3,
    title: "Bondi Website",
    description: "Website for traning on bootstrap",
    imageUrl: "/images/Capture5.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/bondi-design",
    previewUrl: "https://alim-99.github.io/bondi-design/",
  },
  {
    id: 4,
    title: "Hangman Game Website",
    description: "Hangman Game for traning on vanila javascript",
    imageUrl: "/images/Capture6.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/hangman_game",
    previewUrl: "https://alim-99.github.io/hangman_game/",
  },
  {
    id: 5,
    title: "Elzero Template 2",
    description: "Kasper Tameplate for training on building web apps",
    imageUrl: "/images/Capture3.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/template2",
    previewUrl: "https://alim-99.github.io/template2/",
  },
  {
    id: 6,
    title: "Product Store Service",
    description: "A Product Sore Web Service For Training on The Mern Stack",
    imageUrl: "/images/Capture8.png",
    tag: ["All"],
    gitUrl: "https://github.com/alim-99/mern-stack",
    previewUrl: "https://striped-rozalin-aliorganization-1012dd5c.koyeb.app/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-20">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-12">
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
              imgUrl={project.imageUrl}
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
