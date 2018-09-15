import React, { Component } from 'react';
import { loadProducts, deleteProduct, createProduct } from './store';
import { connect } from 'react-redux';
import faker from 'faker';

class ProductList extends Component {
    componentDidMount () {
        this.props.loadInitialProducts();
    }
    render () {
        const { products, deleteProduct, createProduct } = this.props;
        const { handleDelete } = this;
        return (
            <div>
                {/* <button onClick={ ()=>createProduct({ name: 'foo' })}>Create Product</button> */}
                <br/>
                <ul>
                {
                    products.map(product => <li key={ product.id }>
                        { product.name }
                        <button onClick={ ()=>deleteProduct(product) }>X</button>
                    </li>)
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    loadInitialProducts: () => dispatch(loadProducts()),
    deleteProduct: product => dispatch(deleteProduct(product)),
    createProduct: product => dispatch(createProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);