import CountryData from "../CountryData/CountryData";

const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h2>Country Details</h2>
            <hr />
            <CountryData
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            />
        </div>
    );
};

export default CountryDetail;