import './index.scss'
import CustomInput from '../CustomInput/'
import CustomButtom from '../CustomButton/'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useHistory, Link  } from "react-router-dom";


const LoginForm = () => {
   
   const onSubmit = (event) => {
      event.preventDefault();
      history.push("/")
   }

   const history = useHistory()

   return (
   <form className="login-form" onSubmit={onSubmit}>
        <CustomInput 
           type="email"
           name="email"
           label="email"
           defaultValue="ejemplo@email.com"
        />
        <CustomInput 
           type="password"
           name="password"
           label="contraseña"
           defaultValue="*12345"
           autocomplete="current-password"
        />
        <FormControlLabel className="switch-label" control={<Switch
               defaultChecked
           color="default"
           />} label="Subcribirse al Newsletter" />
           <CustomButtom type="submit" label="Ingreso" />
           <Link to="/">Olvide Contraseña</Link>
          </form>)
}

export default LoginForm;