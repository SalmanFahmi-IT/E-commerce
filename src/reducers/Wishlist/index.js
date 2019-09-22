import * as types from '../../constants';

const initialState = {
    data: []
};

const reducer = function CartReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_TO_WISHLIST:
            return{
                data: state.data.concat([action.payload])
            };
        case types.REMOVE_FROM_WISHLIST:
            return{
                data: state.data.filter(e => e.Id !== action.payload.Id)
            };
        default:
            return state;
    }
};

export default reducer;