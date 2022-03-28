import React from "react";
import {Link,Outlet} from "react-router-dom";
function Comp1(){
    return(
        <React.Fragment>
            <h1>Comp1</h1>
            <Link to="/subchild1" style={{marginRight:100}}>Subchild1</Link>
            <Link to="/subchild2" style={{marginRight:100}}>Subchild2</Link>
            <br></br><br></br>
            <Outlet />
        </React.Fragment>
    )
}
export default Comp1;