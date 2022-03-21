/** @format */

import "./App.scss";
import "./assets/scss/style.scss";
import Routes from "./Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./assets/common/Header";
import Footer from "./assets/common/Footer";
import Login from "./assets/components/Account/Login";
import DefaultRouter from "./assets/common/DefaultRouter";
import Loading from "./assets/common/Loading";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <DefaultRouter />
          {/* <Loading /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
