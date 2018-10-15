import React, { Component } from 'react';
import NavBar from './components/navbar';
import Products from './components/products';

class App extends Component {
    state = {
        products: [
            {
                id: 1,
                value: "eggs",
                count: 0
            },
            {
                id: 2,
                value: "cheese",
                count: 0
            },
            {
                id: 3,
                value: "milk",
                count: 0
            }
        ]
    };

    handleAdd = product => {
        const products = [...this.state.products];
        product.id = products.length + 1;
        products.push(product);
        this.setState({ products });
    };

    handleRemove = productId => {
        const products = this.state.products.filter(item => {
            return item.id !== productId;
        });

        this.setState({ products });
    };

    handleReset = () => {
        const products = this.state.products.map(product => {
            product.count = 0;
            return product;
        });

        this.setState({ products });
    };

    handleChange = delta => product => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...product};

        if ( (products[index].count + delta) < 0) return;
        products[index].count+=delta;

        this.setState({ products });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar products={ this.state.products } />
                <main role="main" className="container">
                    <Products
                        products={ this.state.products }
                        onReset={ this.handleReset }
                        onAdd={ this.handleAdd }
                        onRemove={ this.handleRemove }
                        onIncrement={ this.handleChange(1)}
                        onDecrement={ this.handleChange(-1)}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
