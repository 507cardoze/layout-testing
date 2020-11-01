import './index.scss'
import CustomInput from '../CustomInput/'
import CustomButtom from '../CustomButton/'
import { useHistory  } from "react-router-dom";

const RegisterForm = () => {

   const onSubmit = (event) => {
      event.preventDefault();
      history.push("/")
   }

   const history = useHistory()

   return (<form className="register-form" onSubmit={onSubmit}>
   <CustomInput 
       type="text"
       name="nombre"
       label="nombre"
       required
       defaultValue=""
    />
    <CustomInput 
       type="text"
       name="apellido"
       label="apellido"
       defaultValue="Perez"
    />
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
    />
    <CustomButtom type="submit" label="Registro" />
      </form>)
}

export default RegisterForm;