import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    // callback function that will pull in the value passed in
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" >
                {/* run this function when this form has been submitted  */}
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;