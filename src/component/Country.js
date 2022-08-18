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

            <p>{country.name.official}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <img alt="Flag" src={country.flags.png}/>
            <br/>
            <button onClick={handleClick}>Add to Favourites</button>
            <p>Neighbouting Countries</p>
            <ul>
                {neigbourCountriesNode === [] ? <p>None</p> : neigbourCountriesNode}
            </ul>

        </div>
    )
}

export default Country;