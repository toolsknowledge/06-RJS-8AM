import React from "react";
import './App.css';
import {BrowserRouter as Router,
        Routes,
        Route,
        Link,
        NavLink} from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Subchild1 from "./Subchild1";
import Subchild2 from "./Subchild2";

function App() {

  let activeStyle = {
    textDecoration : "underline"
  }



  return (
    <div className="App">
        <Router>
            <NavLink to="/" style={{marginRight:100}} activeStyle><b>Comp1</b></NavLink>
            <NavLink to="/comp2" style={{marginRight:100}} activeStyle><b>Comp2</b></NavLink>
            <NavLink to="/comp3" style={{marginRight:100}}><b>Comp3</b></NavLink>
            <Routes>
                <Route path="/" element={<Comp1 />}>
                  <Route path="subchild1" element={<Subchild1 />}/>
                  <Route path="subchild2" element={<Subchild2 />}/>
                </Route>
                
                <Route path="comp2" element={<Comp2 />}>
                    <Route path="child1" element={<Child1 />}/>
                    <Route path="child2" element={<Child2 />}>
                        <Route path=":p_name"></Route>
                    </Route>
                </Route>
                
                <Route path="/comp3" element={<Comp3 />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
