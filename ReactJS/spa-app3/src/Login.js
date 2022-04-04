import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();


    const uname = useRef(null);
    const upwd = useRef(null);


    const login = (event)=>{
        event.preventDefault();
        //const uname = uname.current.value;
        //const upwd = upwd.current.value;
        navigate("/dashboard?uname=ashokit&upwd=ashokit123");
    };


    return(
        <React.Fragment>
            <form onSubmit={login}>
                <input type="text" ref={uname}></input>
                <br></br>
                <br></br>
                <input type="password" ref={upwd}></input>
                <br></br>
                <br></br>
                <input type="submit" value="Login"></input>
            </form>
        </React.Fragment>
    )
}
export default Login;