import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { loadProducts } from './store';
import Nav from './Nav';

class App extends Component {
    componentDidMount () {
        this.props.loadInitialProducts();
    }
    render () {
        const { products } = this.props;
        return (
            <Router>
            {   
                products[0]
                ? <Nav products={ products } />
                : <h1>Loading...</h1>
            }
            </Router>
        )
    }
}

const mapStateToProps = ({ products }) => ({
    products
})

const mapDispatchToProps = dispatch => ({
    loadInitialProducts: () => dispatch(loadProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);