import React from 'react'
import './searchGrid.css'

function SearchGrid() {
    return (
        <div>
            <div className="search-grid">
            <div className="search-grid__label">
            <span>Destination</span>
            <span>Travel From</span>
            <span>To</span>
            <span>Rooms</span>
            <span>Adults</span>
            <span>Child</span>
            <span> </span>
        </div>
        <div className="search-grid__main">
            <input className="search-grid__main__input" type="text" placeholder="Choose location"/>
            <input className="search-grid__main__input" type="Date"/>
            <input className="search-grid__main__input" type="Date"/>
            <select className="search-grid__main__input" name="rooms">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
            <select className="search-grid__main__input" name="adults">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
            <select className="search-grid__main__input" name="child">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
            <button className="search-button">SEARCH</button>
        </div>
            </div>
        </div>
    )
}

export default SearchGrid
