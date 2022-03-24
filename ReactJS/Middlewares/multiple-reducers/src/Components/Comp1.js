import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import customersActions from "../Actions/customersActions";
function Comp1(){
    
    const dispatch = useDispatch();
    const res = useSelector(state=>state.red1);
    
    useEffect(()=>{
        dispatch(customersActions())
    },[]);
    
    return(
        <React.Fragment>
            {JSON.stringify(res)}
        </React.Fragment>
    )
}
export default Comp1;