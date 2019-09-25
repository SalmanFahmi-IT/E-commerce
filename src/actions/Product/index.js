import * as types from '../../constants';

export const FetchProducts = function(){
    return {
        type: types.FETCH_PRODUCTS,
    };
};

export const FetchProductsSuccess = function(payload){
    return {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload
    };
};