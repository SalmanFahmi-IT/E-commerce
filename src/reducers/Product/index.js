import * as types from '../../constants';

const initialState = {
    data: []
};

const reducer = function CartReducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return state
        case types.FETCH_PRODUCTS_SUCCESS:
            return{
                data: action.payload
            };
        default:
            return state;
    }
};

export default reducer;