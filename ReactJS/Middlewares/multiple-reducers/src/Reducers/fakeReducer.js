import { FAKE_DATA, FAKE_DATA_SUCCESS, FAKE_DATA_FAIL } from "../Constants/fakeConstants";

const initialState = {
    loading : false,
    fake : {},
    error : ""
}
function fakeReducer(state=initialState,action){
    switch(action.type){
        case FAKE_DATA:
        case FAKE_DATA_SUCCESS:
        case FAKE_DATA_FAIL:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                fake:action.fake
            }
        default:
            return state;
    }
}
export default fakeReducer;