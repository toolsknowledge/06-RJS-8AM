import React from "react";
import {useParams} from "react-router-dom";
function Comp1(){
    const {p1,p2,p3} = useParams();
    return(
        <React.Fragment>
            <h1>Comp1....{p1}...{p2}....{p3}</h1>
        </React.Fragment>
    )
}
export default Comp1;