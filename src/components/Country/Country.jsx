import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, capital, area, population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    const passWithParams = () => {
        handleVisited(country);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'going'}`}>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <button onClick={() => handleVisitedCountry(country)} className='button'>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} className='button'>Add Flag</button>
            <br />
            <button onClick={handleVisited} className='button'>{visited ? 'Visited' : 'Going'}</button>
            <br />
            {
                visited ? "I have visited this country." : "I want to going."
            }
            <hr />
            <CountryDetail 
            country = {country} 
            handleVisitedCountry = {handleVisitedCountry} 
            handleVisitedFlags = {handleVisitedFlags} 
            />
        </div>
    );
};

export default Country;