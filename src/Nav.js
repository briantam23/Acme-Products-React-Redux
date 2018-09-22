import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';

const Nav = ({ products }) => {
    return(
        (<div>
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
    )
}

export default Nav;