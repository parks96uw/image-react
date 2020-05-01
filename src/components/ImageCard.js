import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // anytime the image loads or download successfully, we can get the image height
        // callback to event listener
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    // callback needs to be bound
    // using arrow function to make sure context passes
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
              
                {/* <div>
                    { user.instagram}
                </div> */}
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard