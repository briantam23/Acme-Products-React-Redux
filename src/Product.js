import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from './store';

const Product = ({ createProduct }) => {
    return (
        <div>
            <button onClick={ ()=>createProduct({ name: 'foo', rating: 4 })}>Create Product</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    createProduct: product => dispatch(createProduct(product))
})

export default connect(null, mapDispatchToProps)(Product);