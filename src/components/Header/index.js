import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { FiShoppingBag } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/plane-ticket.png'

export default function Header() {
    const cartSize = useSelector(state => state.cart.length)
    return(
        <header className="header" >
            <Link to="/" className="logo" >
                <img className="logo-icon" src={logo} alt="Imagen"/>
                <span className="logo-text" >Ticket Sales</span>
            </Link>
            <Link to="./card" className="header-cart">
                <div>
                    <strong>Sacola </strong>
                    <span>
                        <strong>{cartSize}</strong> Sales
                    </span>
                </div>
                <FiShoppingBag size={32} color="#FFF" />
            </Link>
        </header>
    )
}