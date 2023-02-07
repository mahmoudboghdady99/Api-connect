import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    render() {
        return (
             <div className='nav'>
       <div className='container'>
                <ul className='list'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Team</a></li>
                </ul>
            </div>
       </div>
        );
    }
}

export default Header;
