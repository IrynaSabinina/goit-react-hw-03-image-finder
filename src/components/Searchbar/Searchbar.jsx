import React from 'react';

import styles from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="submit" className={styles.Button}>
          <span className={styles.Label}>Search</span>
        </button>

        <input
          className={styles.Input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
