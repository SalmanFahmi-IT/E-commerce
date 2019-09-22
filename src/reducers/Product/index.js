import * as types from '../../constants';

const initialState = {
    data: []
};

const reducer = function CartReducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return{
                data: action.payload
            };
        default:
            return state;
    }
};

export default reducer;