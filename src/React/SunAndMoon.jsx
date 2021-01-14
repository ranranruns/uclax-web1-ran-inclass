import React, { useState } from 'react';

const SunAndMoon = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/images/moon.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/images/sun.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/images/moon.png')
    }

    return (
        <div>The Sun and The Moon
            <img
                alt="SunAndMoon"
                src={imageSrc}
                onMouseOver={imageOver}
                onMouseOut={imageOut}
            />
        </div>
    )
}

export default SunAndMoon;