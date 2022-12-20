import * as types from '../actions-types/index';

const initialState = {
    loading: false,
    productslist: {},
    errMessage: '',
    fetcherror: false,
    numberCart: 0,
    WListNumber: 0,
    Carts: [],
    WList: [],
    SList: 0
}
const fetchProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                productslist: action.data,
                loading: false,
                fetcherror: false,
                errMessage: ''
            }

        case types.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                errMessage: action.errMessage,
                loading: false
            }
        case types.GET_NUMBER_CART:
            return {
                ...state
            }
        case types.SEARCH_LIST:
            return {
                ...state,
                productslist:state.productslist.filter(item => {
                    //return item.product_name.toLowerCase() === action.payload.toLowerCase()
                    return (item.product_name.toLowerCase()).includes(action.payload.toLowerCase())
                })
            }

        case types.ADD_CART:
            let cart = {
                id: action.payload.id,
                quantity: 1,
                product_name: action.payload.product_name,
                description: action.payload.description,
                image: action.payload.image,
                cost: action.payload.cost
            }
            /*            if (state.numberCart === 0) {
                            //state.Carts=[cart];
                            state.Carts.push(cart);
                        }
                        else { */
            let check = false;
            state.Carts.map((item, key) => {
                if (item.id === action.payload.id) {
                    state.Carts[key].quantity++;
                    check = true;
                }
            });
            if (!check) {
                state.Carts.push(cart);
                state.numberCart = state.numberCart + 1
            }
            //}
            return {
                ...state,
                //numberCart: state.numberCart + 1
                numberCart: state.numberCart
            }
        case types.INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return {
                ...state
            }
        case types.DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state
            }
        case types.DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id !== state.Carts[action.payload].id
                })

            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case types.WISH_LIST:
            let wish = {
                id: action.payload.id,
                product_name: action.payload.product_name,
                description: action.payload.description,
                image: action.payload.image,
                cost: action.payload.cost
            }
            if (state.WList.length == 0) {
                state.WList.push(wish);
            }
            else {
                state.WList.map((item, key) => {
                    if (item.id !== action.payload.id) {
                        state.WList.push(wish);
                    }
                });
            }
            return {
                ...state,
                WListNumber: state.WList.length
            }
        default: return state;
    }
}
export default fetchProducts;