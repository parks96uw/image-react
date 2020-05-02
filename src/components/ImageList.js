import React from 'react';
import ImageCard from './ImageCard';
import './css/ImageList.css';

// DEF: Functional component for Image List
const ImageList = (props) => {

    // DEF: Map each of the images into an Image Card 
    //      Define the props passed down -- key and the image
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;