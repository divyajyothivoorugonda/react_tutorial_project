import {put, takeLatest, takeEvery, call} from 'redux-saga/effects';
import products from '../../data/products.json';

async function fetchProducts(){
    try{
        const res = await products;
        return res;
    }
    catch(error)
    {
        console.log(error);
    }
}

function* actionWatcher(){
    try{
        const result = yield call(fetchProducts);
        if(result===undefined){
            yield put({type:"FETCH_PRODUCTS_FAIL",errMessage:'No products to display'});
        }
        else
        {
            yield put({type:"FETCH_PRODUCTS_SUCCESS", data:result});
        }
    }
    catch(error){
        console.log(error);

    }
}


export default function* executeSaga(){
    yield call(actionWatcher);
    //yield takeLatest('FETCH_PRODUCTS',actionWatcher)
}