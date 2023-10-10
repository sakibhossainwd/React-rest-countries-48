import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region} = props.country;
    return (
        <div className='country'>
            <h1>Name: {props.country.name.common}</h1>
            <h3>Capital: {props.country.capital}</h3>
            <h5>Area: {area}</h5>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;