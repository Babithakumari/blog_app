import "./styles.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Create from "./Components/Create.js";
import NotFound from "./Components/NotFound"

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import BlogDetails from "./Components/BlogDetails";

export default function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/create">
          <Create/>
        </Route>

        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        
        
      </Switch>
      
    </>
    </Router>
  );
}
