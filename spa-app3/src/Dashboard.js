import React from "react";
import {useSearchParams} from "react-router-dom";
function Dashboard(){
    const [searchParams,setSearchParams] = useSearchParams();
    return(
        <React.Fragment>
            <h1>Dashboard .... {searchParams.get("uname")}....{searchParams.get("upwd")}</h1>
        </React.Fragment>
    )
}
export default Dashboard;