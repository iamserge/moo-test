import { ACTION_CREATORS } from '../constants';
import recommendations from './recommendations';
import recommendationsJson from '../recommendations.json';

const { CART_LOADED, ITEMS_CHANGED,RECOMMENDATIONS_LOADED } = ACTION_CREATORS;

describe('recommendations', () => {
    it('should return an empty list of products', () => {
        expect(recommendations([],{})).toEqual([]);
    });

    it('should return an array of products on RECOMMENDATIONS_LOADED', () => {
        //Given
        const action = {
            type: RECOMMENDATIONS_LOADED,
            recommendations: recommendationsJson.products
        }
        const processedRecommendations = action.recommendations.map((recommendation)=>{
            return {...recommendation, itemId: recommendation.id}
        })
        

        //Then
        expect(recommendations([],action)).toEqual(processedRecommendations);
    });

    it('should process recommendations with cartItems on CART_LOADED', () => {
        //Given
        const action = {
            type: CART_LOADED,
            cartItems: [{
                itemId: 1,
                quantity: 3
            }]
        }
        const processedRecommendations = recommendationsJson.products;
        processedRecommendations[0].quantity = 3
        

        //Then
        expect(recommendations(recommendationsJson.products, action)).toEqual(processedRecommendations);
    });

    it('should process recommendations with cartItems on ITEMS_CHANGED', () => {
        //Given
        const action = {
            type: CART_LOADED,
            cartItems: [{
                itemId: 1,
                quantity: 3
            }]
        }
        const processedRecommendations = recommendationsJson.products;
        processedRecommendations[0].quantity = 3
        

        //Then
        expect(recommendations(recommendationsJson.products, action)).toEqual(processedRecommendations);
    });
 });
