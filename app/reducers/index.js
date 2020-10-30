import { combineReducers } from 'redux'
import pageReducer from './page';
import cartReducer from './cart';
import productsReducer from './products';
import recommendations from './recommendations';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    page: pageReducer,
    recommendations: recommendations
});

export default rootReducer;
