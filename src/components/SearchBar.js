import React from 'react';
import './css/SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' };

    // don't let form submit
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term); // callback function
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h1>Image Search</h1>
                    </div>
                    {/* every single time we enter in the input, we will update the state */}
                    <input 
                        className="input-bar"
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })}>
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchBar;