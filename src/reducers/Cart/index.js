import * as types from '../../constants';

const initialState = {
    data: []
};

function addToCart(data, object){
    const index = data.findIndex(obj => obj.uuid === object.uuid);
    if(index !== -1)
        data[index] = {...object, Qty: data[index].Qty+ 1}
    else
        data.push({...object, Qty: 1})

    return data;
}

const reducer = function CartReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_TO_CART:
            return{
                data: addToCart(state.data, action.payload)
            };
        case types.REMOVE_FROM_CART:
            return{
                data: state.data.filter(e => e.uuid !== action.payload.uuid)
            };
        default:
            return state;
    }
};

export default reducer;