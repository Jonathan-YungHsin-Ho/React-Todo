import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.searchBy(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.state.search}
          name="search"
          onChange={this.handleChanges}
          placeholder="...search"
        />
        <button type="submit">Search</button>
        <button onClick={this.props.showAll}>Reset</button>
      </form>
    );
  }
}

export default SearchBar;
