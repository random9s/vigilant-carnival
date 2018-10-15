import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        let count = this.props.products.length;
        let countText = (count===0 ? 'Zero' : count);

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Home</a>
                <span className="badge m-2 badge-secondary">{ countText }</span>
            </nav>
        );
    }
}

export default NavBar;
