import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { fadeIn ,bounceIn} from "../framermotion/variants";
import { useEffect, useRef } from "react";

const SingleProject = ({ name, year, align, image, link }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dampen = 40;
  const rotateX = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  const diagonalMovement = useTransform(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => newRotateX + newRotateY
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(sheenPosition, [-100, 50, 200], [0, 0.05, 0]);
  const sheenGradient = useMotionTemplate`linear-gradient(55deg, transparent, rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%, transparent)`;

  return (
    <motion.div
      variants={bounceIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      ref={cardRef}
      className={`flex w-full items-center gap-8 p-6 rounded-2xl bg-transparent border border-transparent group hover:border-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500 relative z-10 ${
        align === "left" ? "md:flex-row sm:flex-col-reverse justify-start" : "md:flex-row-reverse sm:flex-col-reverse justify-end"
      }`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ backgroundImage: sheenGradient }}
      />
      <div
        className={`flex flex-col gap-2 md:w-1/2 sm:w-full ${
          align === "left" ? "md:text-left" : "md:text-right"
        } text-center`}
      >
        <h2 className="md:text-3xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 group-hover:text-cyan transition-all duration-300">
          {name}
        </h2>
        <h3 className="text-xl font-thin text-gray-200 group-hover:text-white transition-colors duration-300">
          {year}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-pink-500 group-hover:px-4 group-hover:py-1 group-hover:rounded-full transition-all duration-500 cursor-pointer ${
            align === "left" ? "md:self-start" : "md:self-end"
          } sm:self-center`}
        >
          View <BsFillArrowUpRightCircleFill className="group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
        </a>
      </div>
      <motion.div
        className="md:w-1/2 sm:w-full max-h-[220px] max-w-[400px] rounded-xl overflow-hidden relative group-hover:shadow-lg group-hover:shadow-amber-500/40 transition-all duration-500"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 z-10"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <img
          src={image}
          alt={`${name} project image`}
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;