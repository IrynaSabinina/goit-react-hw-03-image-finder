import React, { Component } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };
  handleSearchChange = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      return toast.error('заполните поле поиска');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit"> Search</button>
          <input
            className={styles.Input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}
