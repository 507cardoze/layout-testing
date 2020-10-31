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
       value=""
    />
    <CustomInput 
       type="text"
       name="apellido"
       label="apellido"
       value="Perez"
    />
    <CustomInput 
       type="email"
       name="email"
       label="email"
       value="ejemplo@email.com"
    />
    <CustomInput 
       type="password"
       name="password"
       label="contraseña"
       value="*12345"
    />
    <CustomButtom type="submit" label="Registro" />
      </form>)
}

export default RegisterForm;