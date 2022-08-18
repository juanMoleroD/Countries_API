import React from "react";

const CountrySelector = ({countries, setSelectedCountry}) => {

    const handleSelect = (event) => {
        setSelectedCountry(countries[event.target.value])
    }

    return(
        <>
            <select onChange={handleSelect}>
                <option>Select country</option>
                {countries.map((country, index) => { return <option key={index} value={index}>{country.name.common}</option>})}
            </select>
        </>
        
    )
}

export default CountrySelector;