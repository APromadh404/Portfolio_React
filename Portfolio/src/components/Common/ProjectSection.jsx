import React, { useRef, useState } from "react";
import { motion} from "framer-motion";
import { fadeIn } from "../framermotion/variants";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowUpRightCircleFill, BsArrowLeft, BsShareFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { toast } from "react-hot-toast";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
    description: "A responsive travel website showcasing African destinations with vibrant UI and smooth animations.",
    category: "UI Design",
    languages: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    description: "A full-stack financial app with real-time budgeting and expense tracking features.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Node.js", "MongoDB", "React"],
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
    description: "An interactive tour booking platform with dynamic search and responsive design.",
    category: "UI Design",
    languages: ["HTML", "CSS", "TypeScript", "React"],
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
    description: "A modern banking interface with secure user authentication and transaction history.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Python", "Django", "React"],
  },
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
    description: "A responsive travel website showcasing African destinations with vibrant UI and smooth animations.",
    category: "UI Design",
    languages: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    description: "A full-stack financial app with real-time budgeting and expense tracking features.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Node.js", "MongoDB", "React"],
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
    description: "An interactive tour booking platform with dynamic search and responsive design.",
    category: "UI Design",
    languages: ["HTML", "CSS", "TypeScript", "React"],
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
    description: "A modern banking interface with secure user authentication and transaction history.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Python", "Django", "React"],
  },
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
    description: "A responsive travel website showcasing African destinations with vibrant UI and smooth animations.",
    category: "UI Design",
    languages: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
    description: "A full-stack financial app with real-time budgeting and expense tracking features.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Node.js", "MongoDB", "React"],
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
    description: "An interactive tour booking platform with dynamic search and responsive design.",
    category: "UI Design",
    languages: ["HTML", "CSS", "TypeScript", "React"],
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
    description: "A modern banking interface with secure user authentication and transaction history.",
    category: "Web/Software Development",
    languages: ["JavaScript", "Python", "Django", "React"],
  },
];

const categories = [
  { name: "All", count: projects.length },
  { name: "UI Design", count: projects.filter(p => p.category === "UI Design").length },
  { name: "Web/Software Development", count: projects.filter(p => p.category === "Web/Software Development").length },
];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const containerRef = useRef(null);
  

  const toggleFavorite = (projectName) => {
    setFavorites((prev) =>
      prev.includes(projectName)
        ? prev.filter((name) => name !== projectName)
        : [...prev, projectName]
    );
  };

  return (
    <div
      id="projects"
      className="max-w-[1200px] mx-auto px-4 sm:px-6  relative bg-transparent min-h-[800px] mt-[-100px] " 
      style={{ position: "relative" }}
    >
      {/* 3D Animated Gradient Grid Background */}
      <motion.div
        className="absolute inset-0 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:50px_50px] opacity-25"
          animate={{
            rotateX: [-5, 5, -5],
            rotateY: [-5, 5, -5],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-500/10"
          animate={{
            background: [
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.15), rgba(236, 72, 153, 0.15))",
              "linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(236, 72, 153, 0.1))",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, #F59E0B, #EC4899)`,
                boxShadow: "0 0 8px rgba(245, 158, 11, 0.5), 0 0 12px rgba(236, 72, 153, 0.3)",
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
                x: Math.random() * 50 - 25,
                y: Math.random() * 50 - 25,
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    
      {/* Header Section */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
         style={{userSelect:'none',WebkitUserSelect:'none',MozUserSelect:'none',msUserSelect:'none'}}
      >
        <div className="flex flex-col items-center mt-[100px]">
          <h2 className="pb-3 pt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 mb-6 hover:scale-105 hover:text-cyan transition-all duration-300">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-center text-foreground max-w-xl md:max-w-2xl mb-8 hover:text-gray-500 transition-colors duration-300">
            I have worked on a variety of web development projects, ranging from
            responsive websites for small businesses to full-stack applications and
            complex front-end interfaces.
          </p>
        </div>
      </motion.div>
     
      {/* Mega Menu Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 relative z-10">
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden backdrop-blur-md bg-white/5 border border-orange/50 hover:border-none ${
              selectedCategory === cat.name
                ? "bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg shadow-amber-500/50"
                : "text-foreground hover:text-white hover:bg-gradient-to-r from-amber-500 to-pink-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative z-10">{cat.name}</span>
            <span className="relative z-10 text-xs sm:text-sm opacity-70">({cat.count})</span>
          </motion.button>
        ))}
      </div>
      {/* Slider for Selected Category */}
      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-[900px] mx-auto mt-12"
        initial="hidden"
        whileInView="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Slider
          projects={
            selectedCategory === "All"
              ? projects
              : projects.filter((project) => project.category === selectedCategory)
          }
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </motion.div>
    </div>
  );
};

const Slider = ({ projects, favorites, toggleFavorite }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setSelectedProject(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleShare = (link) => {
    navigator.clipboard.writeText(link);
    toast.success("Project link copied to clipboard!");
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Project Cards Slider */}
      {!selectedProject && (
        <motion.div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(projects.length, 3))}%)` }}
          ref={sliderRef}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2 sm:p-4 cursor-pointer`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleProjectClick(project)}
            >
              <motion.div
                className="relative w-full p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-orange/30 group hover:border-none hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500"
                style={{ perspective: "1000px" }}
                whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-pink-500/0 group-hover:from-amber-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"
                />
                <img
                  src={project.image}
                  alt={`${project.name} project image`}
                  className="w-full h-[150px] sm:h-[180px] object-cover rounded-xl group-hover:brightness-110 transition-all duration-500"
                draggable='false'
                />
                <div className="mt-2 sm:mt-4 text-center">
                  <h3 className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 group-hover:text-cyan transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2">
                    {project.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm text-gray-200 bg-gradient-to-r from-orange-800 to-pink-700 rounded-full px-3 py-1 group-hover:text-white group-hover:bg-gray-800/80 transition-all duration-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* Project Details View */}
      {selectedProject && (
        <motion.div
          className="max-w-[800px] mx-auto p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-orange/30 group hover:border-none hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-pink-500/20 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 group-hover:text-cyan transition-all duration-300">
                {selectedProject.name}
              </h2>
              <h3 className="text-lg sm:text-xl font-thin text-foreground group-hover:text-white transition-colors duration-300">
                {selectedProject.year}
              </h3>
              <p className="text-base sm:text-lg text-foreground group-hover:text-white transition-colors duration-300">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {selectedProject.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm text-gray-200 bg-gradient-to-r from-orange-800 to-pink-700 rounded-full px-3 py-1 group-hover:text-white group-hover:bg-gray-800/80 transition-all duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:self-start sm:self-center self-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg flex gap-2 items-center text-cyan group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-pink-500 group-hover:px-3 sm:px-4 group-hover:py-1 group-hover:rounded-full transition-all duration-500 cursor-pointer"
                >
                  View <BsFillArrowUpRightCircleFill className="group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                <motion.button
                  onClick={() => handleShare(selectedProject.link)}
                  className="text-base sm:text-lg flex gap-2 items-center text-foreground group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-pink-500 group-hover:px-3 sm:px-4 group-hover:py-1 group-hover:rounded-full transition-all duration-500 cursor-pointer"
                >
                  Share <BsShareFill className="group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                </motion.button>
              </div>
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full border border-orange text-foreground hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-500 cursor-pointer md:self-start sm:self-center self-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsArrowLeft /> Back to Projects
              </motion.button>
            </div>
            <div className="w-full md:w-1/2 max-h-[200px] sm:max-h-[220px] max-w-[350px] md:max-w-[400px] rounded-xl overflow-hidden relative border border-orange/30 group-hover:border-none group-hover:bg-gradient-to-r group-hover:from-amber-500/20 group-hover:to-pink-500/20 group-hover:shadow-lg group-hover:shadow-amber-500/40 transition-all duration-500">
              <motion.div
                className="w-full h-full bg-cyan opacity-40 absolute top-0 left-0 z-10"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <img
                src={selectedProject.image}
                alt={`${selectedProject.name} project image`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      )}
      {/* Slider Controls */}
      {!selectedProject && projects.length > 1 && (
        <div className="flex justify-center gap-4 mt-6 sm:mt-8">
          <motion.button
            className="text-xl sm:text-2xl text-gray-200 hover:text-amber-500 transition-colors duration-300"
            onClick={handlePrev}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsFillArrowLeftCircleFill />
          </motion.button>
          <motion.button
            className="text-xl sm:text-2xl text-gray-200 hover:text-pink-500 transition-colors duration-300"
            onClick={handleNext}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsFillArrowRightCircleFill />
          </motion.button>
        </div>
      )}
      {/* Slider Progress Indicator */}
      {!selectedProject && projects.length > 1 && (
        <div className="flex justify-center gap-1 sm:gap-2 mt-4 mb-6">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentIndex ? "bg-gradient-to-r from-amber-500 to-pink-500" : "bg-gray-600"
              }`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSection;