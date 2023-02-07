import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    state = {
        val: 0
    }

    render() { 
        return (
            <React.Fragment>
                <div id="navbar">
                    <img id="logo" src="logo192.png" alt="Italian Trulli"></img>
                    #Elements: {this.props.state.nrOfElements}
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;