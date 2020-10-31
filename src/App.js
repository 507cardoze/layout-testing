import './App.scss'
import { Switch, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from './views/login/'
import Homepage from './views/homepage/'
import Menu from './views/menu/'
import MainLayout from './Components/LayOut/'

function App() {
  return (
    <MainLayout>
       <CssBaseline />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/menu" component={Menu} />
      <Route path="/login" component={Login} />
      {/* <Route path="*" component={NotFoundView} /> */}
      </Switch>
    </MainLayout>
  );
}

export default App;
