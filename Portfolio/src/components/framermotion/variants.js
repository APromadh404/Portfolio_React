export const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.2,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1.0], // Smoother easing for a more natural feel
    },
  },
});

export const scaleIn = (delay) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: delay,
    },
  },
});

export const rotateIn = (direction, delay) => ({
  hidden: {
    rotate: direction === "left" ? -15 : direction === "right" ? 15 : 0,
    opacity: 0,
  },
  show: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const bounceIn = (direction, delay) => ({
  hidden: {
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: delay,
      mass: 0.8,
    },
  },
});