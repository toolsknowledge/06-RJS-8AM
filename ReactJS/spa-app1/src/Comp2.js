import React from "react";
import {Link,Outlet} from "react-router-dom";
function Comp2(){
    return(
        <React.Fragment>
            <h1>Comp2</h1>
            <Link to="/comp2/child1" style={{marginRight:100}}>Child1</Link>
            <Link to="/comp2/child2" style={{marginRight:100}}>Child2</Link>
            <br></br><br></br>
            <Outlet />
        </React.Fragment>
    )
}
export default Comp2;