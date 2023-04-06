import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(query);
        setQuery('')
    };

    return (
        <form className={styles.form} onSubmit={handleSearch}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search blog posts..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button className={styles.button} type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
