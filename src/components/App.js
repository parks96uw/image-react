import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';
import './css/App.css';

class App extends React.Component {
    state = {
        images: []
    };

    // callback function that will pull in the value passed in
    // GET request over to unsplash API
    // arrow function to pass over context for `this`
    onSearchSubmit = async term => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });

        console.log(response);

        // context is in SearchBar instance
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className="ui container" >
                {/* run this function when this form has been submitted  */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;