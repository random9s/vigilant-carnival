import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() {
        let products = <p>No products available!</p>;
        if (this.props.products.length > 0) {
            products = (
                <div>
                    <div>
                        <input id="new-product" type="text" placeholder="product name"></input>
                        <button
                            className="btn btn-secondary btn-sm m-2 btn-success"
                            onClick={(e) => {
                                e.preventDefault();

                                let newProduct = document.getElementById('new-product');
                                let product = {
                                    id: 0,
                                    value: newProduct.value,
                                    count: 0
                                };

                                this.props.onAdd(product);
                                newProduct.value = "";
                            }}
                        >
                            Add
                        </button>
                    </div>
                    <button 
                        className="btn btn-primary btn-sm m-2"
                        onClick={ this.props.onReset } 
                    >
                        Reset
                    </button>
                    {this.props.products.map(product => { 
                        return <Product 
                            key={product.id} 
                            product={product} 
                            onIncrement={ this.props.onIncrement }
                            onDecrement={ this.props.onDecrement }
                            onDelete={ this.props.onRemove }
                        />;
                    })}
                </div>
            );
        }

        return (
            <div>
                { this.props.products.length === 0 && 'Please add a new product!' }
                { products }
            </div>
        );
    }
}

export default Products;
