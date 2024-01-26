import React from 'react';
import { FaSearch } from "react-icons/fa";

import styles from './searchBox.module.scss';
function SearchBox({search, setSearch, searchHandler}) {
    return (
        <div className={styles.search}>
            <input type="text"
             placeholder='search title'
             value={search}
             onChange={e=> setSearch(e.target.value.toLowerCase())} />
            <button className={styles.searchBtn} onClick={searchHandler}><FaSearch/></button>
        </div>
    );
}

export default SearchBox;