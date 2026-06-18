import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
