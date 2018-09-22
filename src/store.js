import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//Action Types
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//Action Creators
const _loadProducts = products => ({
    type: LOAD_PRODUCTS,
    products
})

export const loadProducts = () => (
    dispatch => {
        axios.get('/api/products')
            .then(res => res.data)
            .then(products => dispatch(_loadProducts(products)))
    }
)
const _createProduct = product => ({
    type: CREATE_PRODUCT,
    product
})

export const createProduct = product => {
    return dispatch => {
        return axios.post('/api/products', product)
            .then(res => res.data)
            .then(product => dispatch(_createProduct(product)))
    }
}

const _deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product
})

export const deleteProduct = product => (
    dispatch => {
        axios.delete(`/api/products/${product.id}`)
            .then(() => dispatch(_deleteProduct(product)))
    }
)

const productReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return action.products.sort((a, b) => b.rating - a.rating);
        case CREATE_PRODUCT:
            return [...state, action.product].sort((a, b) => b.rating - a.rating);
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.product.id);
        default:
            return state;
    }
}

const reducer = combineReducers({
    products: productReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;