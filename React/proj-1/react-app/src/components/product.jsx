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
                <div className="col-md-6">
                    <div className="card flex-md-row shadow-sm m-2">
                        <div className="card-body d-flex flex-column align-items-start">
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
                        <img 
                            className="card-img-left flex-auto d-none d-lg-block" 
                            src={ this.props.product.src }
                            alt={ this.props.product.value }
                            width={ 300 }
                            height={ 300 }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
