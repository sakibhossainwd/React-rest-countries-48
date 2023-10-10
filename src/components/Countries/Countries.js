import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country'




const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2 className='heading'>This is another folder component: {countries.length}</h2>
        {
            countries.map(country =>
                <Country 
                country={country}
                // name={country.name.common}
                // capital={country.capital}
                ></Country>)
        }
        </div>
    );
};

export default Countries;