import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import executeSagas from '../sagas/sagas'
import fetchProducts from '../reducers/products'
// export default configureStore({
//   reducer: {},
// })
let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const reducer ={fetchProducts: fetchProducts}
const store = configureStore({
reducer,
middleware:(getDefaultMiddleware) =>
getDefaultMiddleware().concat(middleware),
devTools: process.env.NODE_ENV !== 'production'
})
sagaMiddleware.run(executeSagas)
export default store;