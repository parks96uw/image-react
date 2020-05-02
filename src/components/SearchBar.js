import React from 'react';
import './css/SearchBar.css';

// DEF: Class component SearchBar which will represent the user input bar
class SearchBar extends React.Component {

    // DEF: Define the state which will be kept on our component
    state = { term: '' };

    // DEF: Prevent the form from submitting
    //      Invoke the callback function passed down from the App component
    //      Pulls in the event object
    //      This is a callback function
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    // DEF: Every single time we enter input into the SearchBar, we will update the state
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h1>Image Search</h1>
                    </div>
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