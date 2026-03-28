import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
        ...directions[direction],
      }}
      // Framer Motion automatically handles the scroll reveal observation here:
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 1.4,
        delay: delay / 1000,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
