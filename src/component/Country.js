import React, { useEffect, useState } from "react";

const Country = ({country, addToFavourites, countries, setSelectedCountry}) => {

    const [neighbourCountries, setNeighbourCountries] = useState([])

    const handleClickOnAddFavourite = () => {
        addToFavourites();
    }
    const handleClickOfNeighbour = (event) => {
        setSelectedCountry(neighbourCountries[event.target.value])
    }

    const addNeighbourCountry = (countryToGetNeighboursFrom) => {
        let arrayOfCountries = []
        if("borders" in countryToGetNeighboursFrom) {
            countries.forEach( (countryListItem) => {
                if (countryToGetNeighboursFrom.borders.includes(countryListItem.cca3 || countryToGetNeighboursFrom != countryListItem)) {
                    arrayOfCountries.push(countryListItem)
                }
            })
        }
        setNeighbourCountries(arrayOfCountries);
    }

    useEffect( () => { addNeighbourCountry(country) }, [country])

    let neigbourCountriesNode = neighbourCountries.map( (countryItem, index) => {
        return (
                <li key={countryItem.cca3} onClick={handleClickOfNeighbour} value={index}>
                    {countryItem.name.common} - {countryItem.population. toLocaleString('en', {useGrouping:true})}
                </li>
        ) 
    });

    // if ("borders" in country) {
    //     countries.forEach( (countryListItem) => {
    //         if (country.borders.includes(countryListItem.cca3)) {
    //             neigbourCountriesNode.push(
    //                 <li key={countryListItem.cca3} onClick={handleClickOfNeighbour} value={neigbourCountriesNode.length}>
    //                     {countryListItem.name.common} - {countryListItem.population. toLocaleString('en', {useGrouping:true})}
    //                 </li>
    //             )
    //         }
    //     })
    // }


    

    

    
    
    

    return (
        <div className="card-detail">
            <heading className="card-header">
                <h2>{country.name.official}</h2>
            </heading>
            <img alt="Flag" src={country.flags.png} className="flag-image"/>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString('en', {useGrouping:true})}</p>
            <button onClick={handleClickOnAddFavourite}>Add to Favourites</button>
            <h3>Neighbouring Countries & Population:</h3>
            <ul>
                {neigbourCountriesNode === [] ? null : neigbourCountriesNode}
            </ul>

        </div>
    )
}

export default Country;