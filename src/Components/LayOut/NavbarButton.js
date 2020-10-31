import './NavbarButton.scss'

const NavBarButton = ({ubicacion, history}) => {

    const handleOnClick = (ubicacion) => {
        if(ubicacion !== "/menu"){
            history.push("/menu")
        }else{
            history.push("/login")
        }
    }


    return <div className="bar" onClick={()=>handleOnClick(ubicacion)}>
    {ubicacion === "/menu" ? <div className="arrow">
  <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M9.16461 16.671C8.94961 16.8903 8.68085 17 8.38522 17C8.08959 17 7.82083 16.8903 7.60582 16.671L0.349384 9.26774C0.295633 9.2129 0.241882 9.15806 0.215006 9.10323C0.215006 9.10323 0.188129 9.07581 0.188129 9.04839C0.161253 8.99355 0.134378 8.93871 0.107502 8.91129C0.107502 8.88387 0.107504 8.85645 0.0806274 8.85645C0.053751 8.80161 0.0537529 8.77419 0.0268764 8.71935C0 8.6371 0 8.58226 0 8.5C0 8.41774 0 8.3629 0.0268764 8.28065C0.0268764 8.22581 0.053751 8.17097 0.0806274 8.14355C0.0806274 8.11613 0.0806255 8.08871 0.107502 8.08871C0.134378 8.03387 0.161253 7.97903 0.188129 7.92419C0.188129 7.92419 0.188129 7.89677 0.215006 7.89677C0.241882 7.84194 0.295633 7.7871 0.349384 7.73226L7.60582 0.329032C8.03583 -0.109677 8.7346 -0.109677 9.16461 0.329032C9.59462 0.767742 9.59462 1.48065 9.16461 1.91935L3.78947 7.40323H22.8981C23.5162 7.40323 24 7.89677 24 8.52742C24 9.15806 23.5162 9.65161 22.8981 9.65161H3.78947L9.16461 15.1355C9.59462 15.5194 9.59462 16.2323 9.16461 16.671Z" fill="white"/>
   </svg>
  </div>  : <>
  <div className="bar1"></div>
    <div className="bar2"></div>
  </> }
  </div>
}

export default NavBarButton;