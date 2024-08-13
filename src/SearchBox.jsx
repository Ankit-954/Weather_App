import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SearchBox.css';


const SearchBox = ({ query, setQuery, search, handleKeyPress, navigateHome }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <FaSearch
                className="search-icon"
                onClick={search}
                size={20}
            />
            <div className="button-group">
                <button className="home-button" onClick={navigateHome}>
                    Home
                </button>
                <Link to="/about">
                    <button className="about-button">
                        About
                    </button>
                </Link>

                <Link to="/contact">
                    <button className="contact-button">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchBox;
