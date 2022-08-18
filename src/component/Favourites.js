import React from "react";

const Favourites = ({favourites, setSelectedCountry, addToFavourites}) => {

    const handleClick = (event) => {
        setSelectedCountry(favourites[event.target.value])
    }

    const favouriteCountryNodes = favourites.map( (country, index) => {
        return <li key={country.cca3} value={index} onClick={handleClick}>{country.name.common}</li>
    })


    return (
        <section id="favourites-card">
            <h2>I am the favourites</h2>
            <ul>
                {favouriteCountryNodes}
            </ul>

        </section>
    )
}

export default Favourites;