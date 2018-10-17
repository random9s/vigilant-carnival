import React, { Component } from 'react';

class NewProduct extends Component {
    state = {
        value: "",
        isDisabled: true
    };

    handleChange = e => {
        const val = e.target.value;
        let isDisabled = (val.length > 0 ? false : true);

        this.setState({
            value: val,
            isDisabled: isDisabled
        });
    };

    handleSubmit = e => {
        e.preventDefault ();
        const { value } = this.state;

        if (value.length > 0) {
            this.props.onAdd({
                id: 0,
                value: value,
                count: 0,
                src: "https://www.freeiconspng.com/uploads/no-image-icon-15.png"
            });

            this.setState({
                value: "",
                isDisabled: true
            });
        } 
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="product name"
                    onChange={ this.handleChange }
                    value={ this.state.value }
                >
                </input>
                <button
                    className="btn btn-secondary btn-sm m-2 btn-success"
                    onClick={ this.handleSubmit }
                    disabled={this.state.isDisabled}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default NewProduct;
