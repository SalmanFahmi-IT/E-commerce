import * as types from '../../Constants';

const initialState = {
    data: []
};

const reducer = function CartReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_TO_CART:
            return{
                data: state.data.concat([action.payload])
            };
        case types.REMOVE_FROM_CART:
            return{
                data: state.data.filter(e => e.Id !== action.payload.Id)
            };
        default:
            return state;
    }
};

export default reducer;