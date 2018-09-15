import React, { Component } from 'react';
import { deleteProduct, createProduct } from './store';
import { connect } from 'react-redux';
import faker from 'faker';

const ProductList = ({ products, deleteProduct, createProduct }) => {
    return (
        <div>
            <button onClick={ ()=>createProduct({ name: faker.commerce.product(), rating: Math.floor(Math.random() * 5) + 1 })}>Create Product</button>
            <br/>
            <ul>
            {
                products.map(product => product.rating > 2 
                ? (<li key={ product.id } className='green'> 
                    { product.name } { product.rating }
                    <button onClick={ ()=>deleteProduct(product) }>X</button>
                </li>)
                : (<li key={ product.id }>
                    { product.name } { product.rating }
                    <button onClick={ ()=>deleteProduct(product) }>X</button>
                </li>))
            }
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    createProduct: product => dispatch(createProduct(product))
})

export default connect(null, mapDispatchToProps)(ProductList);