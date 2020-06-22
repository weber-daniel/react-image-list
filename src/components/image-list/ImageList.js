import React from "react";
import './ImageList.scss';
import ImageContainer from "../image-container/ImageContainer";

export default function ImageList({ props }) {
    console.log('props ImageList', props);

    if (!props || props.length <= 0) {
        return (
            <div>
                <h3>No Image Data to load...</h3>
            </div>
        )
    }

    const imageList = props.map(img => <ImageContainer key={img.img_key} props={img} />);

    return (
        <div className="Image-List-Wrapper">
            {imageList}
        </div>
    )
}
