import './index.scss'
import List from '../../Components/List/'

function Menu() {


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
      <div className="menu-page">
         <List listItems={list} />
      </div>
    );
  }
  
  export default Menu;
  