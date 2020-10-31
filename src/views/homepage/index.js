import './index.scss'
import {SuccessLogo} from './success'

function HomePage() {
  return (
    <div className="success-page">
       <div className="success-container">
          <span className="success-text">Success</span>
          <SuccessLogo className="success-logo" />
       </div>
    </div>
  );
}

export default HomePage;
