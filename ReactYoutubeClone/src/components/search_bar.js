import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

  }
  render() {
      return (
        <div>
          <input
            value= {this.state.term} // controlled component
            onChange={(event) => this.setState({term: event.target.value})}/>
        </div>
      )
  }

  onInputChange(event) {
    // this shit doesn't work, function had to be bound, I believe
    this.setState({term: event.target.value});
  }
}

export default SearchBar;
