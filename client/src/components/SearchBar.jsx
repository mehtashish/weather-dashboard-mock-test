import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
    };

    return (
        <form onSubmit={handleSubmit} className="input-group">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;