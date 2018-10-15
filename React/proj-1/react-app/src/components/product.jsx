import React, { Component } from 'react';

class Product extends Component {
    render() {
        let count = this.props.product.count;
    
        let classes = "badge m-2 badge-";
        classes += (count === 0 ? "warning" : "primary");

        let countView = <span className={classes}>Zero</span>;
        if (count > 0) countView = <span className={classes}>{count}</span>;

        return (
            <div className="row">
                <span className="col-sm">{this.props.product.value}</span>
                { countView }
                <button 
                    onClick={() => this.props.onIncrement(this.props.product)} 
                    className="btn btn-secondary btn-sm m-1"
                > 
                    +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.product)} 
                    className="btn btn-secondary btn-sm m-1"
                    disabled={this.props.product.count === 0}
                >
                    -
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.product.id)} 
                    className="btn btn-secondary btn-sm btn-danger m-2"
                >
                    Remove
                </button>
            </div>
        );
    }
}

export default Product;
