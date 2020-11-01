import './index.scss'

const ToggleButton = ({action, value, className}) => (
<div 
onClick={()=>action(value)} 
className={className}
>
    {value ? "ingreso" : "registro"}
</div>
)

export default ToggleButton;