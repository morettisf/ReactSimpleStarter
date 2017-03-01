import React, { Component } from 'react'

class SearchBar extends Component { // classes must have render functions
  constructor(props) {
    super(props) // super calls parent method

    this.state = { term: 'Starting Value' } // only use = for state inside constructor
  }

  render() {
    return (
      <div className='search-bar'>
        <input 
          value={this.state.term} // controlled component, tells input what value is after change of state
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

}

export default SearchBar