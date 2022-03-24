import axios from "axios";
import { GET_CUSTOMERS,GET_CUSTOMERS_SUCCESS,GET_CUSTOMERS_FAIL } from "../Constants/customersConstats";
const customersActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:GET_CUSTOMERS,
            loading:false,
            error:"",
            customers:{}
        })
        try{
           const res = await axios.get("https://www.w3schools.com/angular/customers.php");
           dispatch({
               type:GET_CUSTOMERS_SUCCESS,
               loading:true,
               error:"",
               customers:res
           })
        }catch(err){
            dispatch({
                type:GET_CUSTOMERS_FAIL,
                loading:true,
                error:err.message,
                customers:{}
            })
        }
    }
};
export default customersActions;