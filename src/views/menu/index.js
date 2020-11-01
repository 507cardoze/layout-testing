import './index.scss'
import List from '../../Components/List/'
import { motion } from "framer-motion";

function Menu() {

  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-20%",
    },
  };

  const pageTransitions = {
    type: "spring",
    stiffness: 100,
  };


  const list = [
    {
      id: 1,
      name: "inicio"
    },
    {
      id: 2,
      name: "servicios"
    },
    {
      id: 3,
      name: "nuestro equipo"
    },
    {
      id: 4,
      name: "portafolio"
    },{
      id: 5,
      name: "CONTÁCTO"
    },
    {
      id: 6,
      name: "términos y condiciones"
    }
  ]

    return (
      <motion.div className="menu-page"  initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}>
         <List listItems={list} />
      </motion.div>
    );
  }
  
  export default Menu;
  