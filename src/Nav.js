import React, { Component } from 'react';
import { Link, Route, Switch, HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from './store';
import ProductList from './ProductList';
import Product from './Product';

class Nav extends Component {
    componentDidMount () {
        this.props.loadInitialProducts();
    }
    render () {
        const { products } = this.props;
        products.sort((a, b) => b.rating - a.rating)
        return (
            <Router>
            {   
                products[0]
                ? (<div>
                    <h1>Acme-Products-React-Redux</h1>
                    <ul>
                        <li><Link to='/products'>Products ({ products.length })</Link></li>
                        <li><Link to={`/products/${products[0].id}`}>Top Rated ({ products[0].name })</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/products/:id' render={ () => <Product product={ products[0] }/>}/>
                        <Route path='/products' render={ () => <ProductList products={ products }/> }/>
                    </Switch>
                </div>)
                : <h1>Loading...</h1>
            }
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    loadInitialProducts: () => dispatch(loadProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);