import React from 'react';
import './css/ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // we want to manipulate the data we get into the format we want
    // we only want the id, image url, and description
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;