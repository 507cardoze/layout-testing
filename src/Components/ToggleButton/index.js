import './index.scss'

const ToggleButton = ({action, value}) => (
<div onClick={()=>action(value)} className="auth-button">{value ? "ingreso" : "registro"}
</div>
)

export default ToggleButton;