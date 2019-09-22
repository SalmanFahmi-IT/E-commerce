import * as types from '../../Constants';

export const AddToWishlist = function(payload){
    return {
        type: types.ADD_TO_WISHLIST,
        payload
    };
};

export const RemoveFromWishlist = function(payload){
    return {
        type: types.REMOVE_FROM_WISHLIST,
        payload
    };
};