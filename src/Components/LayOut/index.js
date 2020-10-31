import React from "react";
import './index.scss'
import {Logo, BackgroundImage1, BackgroundImage2, BackgroundImage3} from './logo'
import { withRouter } from 'react-router'
import NavBarButton from './NavbarButton'

function MainLayout({children, location, history}) {

  return (
    <div className="main-layout">
       <BackgroundImage1 className="background-image-1" />
       <BackgroundImage2 className="background-image-2" />
       <BackgroundImage3 className="background-image-3" />
        <div className="app-bar">
         <NavBarButton ubicacion={location.pathname} history={history}/>
        </div>
        <div className="logo-container">
        <Logo className="logo" />
        </div>
        <div className="content">
        {children}
        </div>
    </div>
  );
}

export default withRouter(MainLayout);
