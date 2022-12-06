import * as types from '../actions-types/index';
/*export const fetchProducts = () => ({
    type:types.FETCH_PRODUCTS
})*/ 

//{type:'FETCH_PRODUCTS_SUCCESS',payload:data}
export const fetchProductsSuccess = (data) =>({
    type:types.FETCH_PRODUCTS_SUCCESS,
    data 
})
export const fetchProductsFail = (errMessage) =>({
    type:types.FETCH_PRODUCTS_FAIL,
    errMessage
})
export function GetNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}

export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}
export function WishList(payload){
    return {
        type:'WISH_LIST',
        payload
    }
}
export function UpdateCart(payload){
    return {
        type:'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}