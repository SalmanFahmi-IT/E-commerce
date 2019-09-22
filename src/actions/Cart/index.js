import * as types from '../../Constants';

export const AddToCart = function(payload){
    return {
        type: types.ADD_TO_CART,
        payload
    };
};

export const RemoveFromCart = function(payload){
    return {
        type: types.REMOVE_FROM_CART,
        payload
    };
};