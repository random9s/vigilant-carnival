import React, { Component } from 'react';
import NavBar from './components/navbar';
import Products from './components/products';

class App extends Component {
    state = {
        products: [
            {
                id: 1,
                value: "eggs",
                count: 0,
                src: "https://media.npr.org/assets/img/2018/01/03/gettyimages-182717335-30-355069be313ad674537c51219c269b654d5fc05a-s1100-c15.jpg"
            },
            {
                id: 2,
                value: "cheese",
                count: 0,
                src: "https://images-na.ssl-images-amazon.com/images/I/41Ip5NBRyEL.jpg"
            },
            {
                id: 3,
                value: "milk",
                count: 0,
                src: "https://static.meijer.com/Media/000/41250/0004125010200_1_A1C1_0600.png"
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
        return ( <React.Fragment>
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
