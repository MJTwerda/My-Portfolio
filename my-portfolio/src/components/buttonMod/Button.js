import React from 'react';

export default function Button({setToLight, setToDark}) {

    return(
        <div>
            <button onClick={() => setToDark()}>Moon</button>
            <button onClick={() => setToLight()}>Sun</button>
        </div>
    )
}