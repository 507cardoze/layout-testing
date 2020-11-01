import './index.scss'
import {SuccessLogo} from './success'
import { motion } from "framer-motion";

function HomePage() {
  const pageVariants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-20%",
    },
  };

  const pageTransitions = {
    type: "spring",
    stiffness: 100,
  };
  
  return (
    <motion.div className="success-page"  initial="out"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransitions}>
       <div className="success-container">
          <span className="success-text">Success</span>
          <SuccessLogo className="success-logo" />
       </div>
    </motion.div>
  );
}

export default HomePage;
