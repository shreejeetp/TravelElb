import React from 'react'
import './header.css'
import whatsappImg from '../../assets/img/WhatsApp.svg'

function Header() {
    return (
        <div className="header">
        <div className="header__logo">
            <span className="header__logo_txt">TravelElb</span>
            <div className="logo_dot"></div>
        </div>
        <div className="header__links">
            <span className="header_link">Home</span>
            <span className="header_link">Tours</span>
            <span className="header_link__down">
                <i class="bi bi-chevron-down"></i>
            </span>
            <span className="header_link">Hotels</span>
            <span className="header_link__down">
                <i class="bi bi-chevron-down"></i>
            </span>
            <span className="header_link">Flights</span>
            <span className="header_link__down">
                <i class="bi bi-chevron-down"></i>
            </span>
            <span className="header_link">About Us</span>
            <span className="header_link">Blog</span>
            <span className="header_link">Contact</span>

        </div>
        <a href="/" className="whatsapp-button">
            <img className="whatsapp-logo" src={whatsappImg} alt="whtsapp-logo" />
            <span className="whatsapp-button__text">WhatsApp</span>
        </a>
    </div>
    )
}

export default Header
