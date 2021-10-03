import "./App.css";
import Home from "./component/home/home";
import Quotes from "./component/quotes/quotes";
import ToDo from "./component/todo/todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link class="navbar-brand" to="/">
              Design<span>er</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/todo">
                    ToDo List (from API)
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/quotes">
                    Random Quotes
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={ToDo} />
            <Route exact path="/quotes" component={Quotes} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
