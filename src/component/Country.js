import React from "react";

const Country = ({country, addToFavourites, countries}) => {

    const handleClick = () => {
        addToFavourites();
    }

    let neigbourCountriesNode = [];

    
    if (country.hasOwnProperty("borders")) {
        countries.forEach( (countryListItem) => {
            if (country.borders.includes(countryListItem.cca3)) {
                neigbourCountriesNode.push(
                    <p key={countryListItem.cca3}>{countryListItem.name.common} - {countryListItem.population}</p>
                )
            }
        })
    }
    return (
        <div id="country-detail">
            <heading id="country-header">
                <h2>{country.name.official}</h2>
            </heading>
            <img alt="Flag" src={country.flags.png} className="flag-image"/>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString('en', {useGrouping:true})}</p>
            <button onClick={handleClick}>Add to Favourites</button>
            <h3>Neighbouring Countries</h3>
            <ul>
                {neigbourCountriesNode === [] ? <p>None</p> : neigbourCountriesNode}
            </ul>

        </div>
    )
}

export default Country;