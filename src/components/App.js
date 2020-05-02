import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';
import './css/App.css';

class App extends React.Component {
    
    // DEF: Set state of the component
    state = {
        images: []
    };
    
    // DEF: Sends a GET request to the Unsplash API based on the search term
    //      that was entered by the user. We pass in our axios configurations
    //      in our request
    //      This is the main function of our application
    //      This is an asychronous callback function
    //      We use an arrow function to passover the context used in `this`
    onSearchSubmit = async term => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });

        // DEF: Set the state of the list of images returned by the response
        this.setState({
            images: response.data.results
        })
    }

    // `this.onSearchSubmit` will only be invoked when the form has been submitted
    render() {
        return (
            <div className="ui container" >
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;