import React, { Component } from 'react';
import Product from './product';
import NewProduct from './newproduct';

class Products extends Component {
    render() {
        let products = <p>No products available!</p>;
        if (this.props.products.length > 0) {
            products = (
                <div>
                    <NewProduct onAdd={ this.props.onAdd } />
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
