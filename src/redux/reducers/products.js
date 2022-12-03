import * as types from '../actions-types/index';

const initialState = {
    loading:false,
    productslist:{},
    errMessage:'',
    fetcherror:false,
    numberCart:0,
    Carts:[]
}
const fetchProducts = (state = initialState, action) =>{
    switch(action.type){
    case types.FETCH_PRODUCTS_SUCCESS:
        return{ 
            ...state,
            productslist : action.data,
            loading : false,
            fetcherror : false,
            errMessage : ''
            }

    case types.FETCH_PRODUCTS_FAIL:
        return{
            ...state,
            errMessage : action.errMessage,
            loading: false
        }
        case types.GET_NUMBER_CART:
                return{
                    ...state
                }
        case types.ADD_CART:
            console.log(action.payload.decription);
            if(state.numberCart===0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.product_name,
                    decription:action.payload.decription,
                    image:action.payload.image,
                    cost:action.payload.price
                } 
                state.Carts=cart; 
            }
            else{
                //console.log(state.Carts)
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id!==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case types.INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case types.DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            case types.DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!==state.Carts[action.payload].id
                    })
                   
                }

        default: return state;
    
    }
}
export default fetchProducts;