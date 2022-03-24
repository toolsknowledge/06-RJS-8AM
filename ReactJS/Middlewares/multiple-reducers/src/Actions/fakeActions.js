import axios from "axios";
import { FAKE_DATA,FAKE_DATA_SUCCESS,FAKE_DATA_FAIL } from "../Constants/fakeConstants";
const fakeActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:FAKE_DATA,
            loading:false,
            error:"",
            fake:{}
        })
        try{
           const res = await axios.get("https://reqres.in/api/users?page=2");
           dispatch({
               type:FAKE_DATA_SUCCESS,
               loading:true,
               error:"",
               fake:res
           })
        }catch(err){
            dispatch({
                type:FAKE_DATA_FAIL,
                loading:true,
                error:err.message,
                fake:{}
            })
        }
    }
};
export default fakeActions;