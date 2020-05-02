import React from 'react';

// Class component ImageCard
class ImageCard extends React.Component {

    // DEF: Initialize values for the state
    constructor(props) {
        super(props);

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    // DEF: Attaches ref to DOM for when images load and invoke the setSpans callback
    //      functions. This will allow us to grab the image height to set the size of
    //      their container. Will execute anytime the image loads or downloads successfully
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    // DEF: Sets the state of the spans height for the images based on the
    //      ref to the DOM element tied in componentDidMount
    //      Uses arrow function to make sure that the context passes over for `this`
    //      This is a callback function
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard