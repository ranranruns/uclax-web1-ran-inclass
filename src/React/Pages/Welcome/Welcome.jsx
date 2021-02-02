import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff.jsx';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            {/* <Slideshow /> */}
            <Tabbed />
            <Staff />
        </div>
    );
}

export default Welcome;