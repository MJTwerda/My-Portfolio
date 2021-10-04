import React from 'react';
import {socialData} from '../data/Data';

export default function Footer() {
    return(
        socialData?.map(data => {
            return (
                <a href={data.url}>
                    <h3>{data.platform}</h3>
                    <img src={data.logo}  alt='' />    
                </a>
            )}
        )
    )
}