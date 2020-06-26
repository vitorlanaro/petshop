import React, { Component } from 'react';
import api from '../../services/api';

import './style.css'
import { render } from '@testing-library/react';


export default class Main extends Component {
    state = {
        products: []
    }
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get();
        this.setState({products: response.data});
    };

    render(){
        return (
            <div className = "product-list">
                {this.state.products.map(products => (
                    <h2>{products.nome}-{products.valor}$</h2>
                ))}
            </div>
        )
    }

}
    

   