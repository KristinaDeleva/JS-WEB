import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact to="/" className="logo">Interactive IMDB</NavLink>
                <div className="header-right">
                    <NavLink exact to="/">Home</NavLink>
                    {
                        this.props.username
                            ?
                            (<span>
                                <a href="#">Welcome {this.props.username}!</a>
                                <a href="#">Logout</a>
                            </span>)
                            :
                            (<span>
                                <NavLink to="/register">Register</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </span>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;