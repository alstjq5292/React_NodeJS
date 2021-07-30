import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/views/HomePage/HomePage.js';
import LandingPage from './components/views/LandingPage/LandingPage.js'
import LoginPage from './components/views/LoginPage/LoginPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
import SpearPage from './components/views/Spear/Spear.js';
import Auth from './hoc/auth';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)}>
          </Route>
          <Route exact path="/landing" component={Auth(LandingPage, null)}>
          </Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}>
          </Route>
          <Route exact path="/register" component={Auth(RegisterPage, false)}>
          </Route>
          <Route exact path="/spear" component={Auth(SpearPage, false)}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;

