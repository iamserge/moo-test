import { combineReducers } from 'redux'
import pageReducer from './page';
import cartReducer from './cart';
import productsReducer from './products';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    page: pageReducer
});

export default rootReducer;
