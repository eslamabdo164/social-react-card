import React from 'react';

const Postimage = () => {
    let random = Math.floor(Math.random()*10);
    return(
        <a href="#"><img src={"https://picsum.photos/450/150?image="+random}  alt='test' /></a>
    )
}

export default Postimage ;