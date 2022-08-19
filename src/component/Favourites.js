import React from "react";

const Favourites = ({favourites, setSelectedCountry, addToFavourites}) => {

    const handleClick = (event) => {
        setSelectedCountry(favourites[event.target.value])
    }

    const favouriteCountryNodes = favourites.map( (country, index) => {
        return <li key={country.cca3} value={index} onClick={handleClick}>{country.name.common}</li>
    })


    return (
        <section className="card-detail favourites-card">
            <header className="card-header">
                <h2>Your Favourites</h2>
            </header>
            <ul>
                {favouriteCountryNodes}
            </ul>

        </section>
    )
}

export default Favourites;