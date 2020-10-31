import './index.scss'
import RegisterForm from '../../Components/RegisterForm/'
import LoginForm from '../../Components/LoginForm/'
import LoginTabs from '../../Components/LoginTabs/'
import ToggleButton from '../../Components/ToggleButton'
import {useState} from 'react';

function Login() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="auth-page">
       <LoginTabs>
          <ToggleButton action={setToggle} value={true} />
          <ToggleButton action={setToggle} value={false} />
       </LoginTabs>
       {toggle ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default Login;
