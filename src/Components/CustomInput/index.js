import './index.scss'

const CustomInput = ({type,name,label,value, handleChange}) => 
<div className="input-group">
<label htmlFor={name}>{label}</label>
<input type={type} name={name} value={value}/>
</div>

export default CustomInput;