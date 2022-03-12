/** @format */

import "./App.scss";
import "./assets/scss/style.scss";
import Routes from "./Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./assets/common/Header";
import Footer from "./assets/common/Footer";
import Login from "./assets/components/Account/Login";
import Demo from "./assets/components/Demo";
import DefaultRouter from "./assets/common/DefaultRouter";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Demo></Demo> */}
      {/* <Router>
        <div className="shopmobile-main">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router> */}
         <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <DefaultRouter />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
