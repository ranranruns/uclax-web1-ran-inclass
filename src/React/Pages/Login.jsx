import React, { useState } from 'react';

const Login = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/images/moon.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/images/sun.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/images/moon.png')
    }

    return (
        <div>
            <h1>The Sun and The Moon</h1>
            <img
                alt="The Sun and Moon"
                src={imageSrc}
                onMouseOver={imageOver}
                onMouseOut={imageOut}
            />
        </div>
    )
}

export default Login;