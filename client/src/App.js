import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>Welcome to my Post !!!</h1>
          <Link to="/">My Posts</Link>
          <Link to="/createpost">Create Post</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
