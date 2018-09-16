import React from 'react';
import { deleteProduct } from './store';
import { connect } from 'react-redux';

const Product = ({ product, deleteProduct }) => {
    return (
    <ul>
        <li>
            { product.name }
            <button onClick={ ()=>deleteProduct(product) }>X</button>
        </li>
    </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteProduct: product => dispatch(deleteProduct(product))
})

export default connect(null, mapDispatchToProps)(Product);