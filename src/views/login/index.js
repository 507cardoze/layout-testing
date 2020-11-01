import './index.scss'
import RegisterForm from '../../Components/RegisterForm/'
import LoginForm from '../../Components/LoginForm/'
import LoginTabs from '../../Components/LoginTabs/'
import ToggleButton from '../../Components/ToggleButton'
import {useState} from 'react';
import { motion } from "framer-motion";


function Login() {
  const [toggle, setToggle] = useState(true);
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "20%",
    },
  };

  const pageTransitions = {
    type: "spring",
    stiffness: 100,
  };
  
  return (
    <motion.div className="auth-page" initial="out"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransitions}>
       <LoginTabs>
          <ToggleButton action={setToggle} value={true} className={`auth-button ${toggle ? "activado" : ""}`} />
          <ToggleButton action={setToggle} value={false} className={`auth-button ${!toggle ? "activado" : ""}`} />
       </LoginTabs>
       {toggle ? <LoginForm /> : <RegisterForm />}
    </motion.div>
  );
}

export default Login;
