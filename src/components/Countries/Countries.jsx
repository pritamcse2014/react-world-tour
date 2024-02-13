import { useState } from 'react';
import { useEffect } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [] )

    const handleVisitedCountry = (country) => {
        // console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            {/* Visited Country */}
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* Flag Countries */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, i) => <li key={i}><img src={flag} /></li>)
                }
            </div>

            {/* Display Countries */}
            <div className='country-container'>
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        handleVisitedFlags={handleVisitedFlags} 
                        country={country} 
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;