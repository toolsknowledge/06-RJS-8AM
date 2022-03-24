import { GET_CUSTOMERS, GET_CUSTOMERS_FAIL, GET_CUSTOMERS_SUCCESS } from "../Constants/customersConstats";

const initialState = {
    loading : false,
    customers : {},
    error : ""
}
function customersReducer(state=initialState,action){
    switch(action.type){
        case GET_CUSTOMERS:
        case GET_CUSTOMERS_SUCCESS:
        case GET_CUSTOMERS_FAIL:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                customers:action.customers
            }
        default:
            return state;
    }
}
export default customersReducer;