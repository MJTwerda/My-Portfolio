import React from 'react';
import {socialData} from '../data/SocialData';

export default function Footer() {
    return(
        <ul>
            {socialData?.map(data => {
                return (
                    <li>
                        <a href={data.url}>
                            <img src={data.logo}  alt='' />    
                        </a>
                    </li>
                )}
            )}
        </ul>
    )
}