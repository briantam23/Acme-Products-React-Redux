import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import ProductList from './ProductList';
import Product from './Product';

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <div>
                <Nav />
                <Route path='/products' render={ () => <ProductList /> }/>
                <Route path='/products/:id' render={ () => <Product />}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)