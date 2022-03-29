import React from "react";
import {useParams} from "react-router-dom";
function Comp3(){
    const {v1,v2,v3} = useParams();
    return(
        <React.Fragment>
            <h1>Comp3....{v1}....{v2}....{v3}</h1>
        </React.Fragment>
    )
}
export default Comp3;