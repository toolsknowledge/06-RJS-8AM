import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import fakeActions from "../Actions/fakeActions";
function Comp2(){
    
    const dispatch = useDispatch();
    const res = useSelector(state=>state.red2);
    
    useEffect(()=>{
        dispatch(fakeActions())
    },[]);
    
    return(
        <React.Fragment>
            {JSON.stringify(res)}
        </React.Fragment>
    )
}
export default Comp2;