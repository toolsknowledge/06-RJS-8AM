import React from "react";
import {useParams} from "react-router-dom";
function Child2(){
    const {p_name} = useParams();
    return(
        <React.Fragment>
            Child2  {p_name}
        </React.Fragment>
    )
}
export default Child2;