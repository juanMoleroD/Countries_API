import React, {useState, useEffect} from "react";
import CountrySelector from "../component/CountrySelector.js";
import Country from "../component/Country";
import Favourites from "../component/Favourites";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = () => {
        if(favourites.includes(selectedCountry) === false){
            let newFavourites = [...favourites];
            newFavourites.push(selectedCountry)
            setFavourites(newFavourites);
        }
        return
    }
    

    useEffect( () => {getCountries()}, []);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .catch(error => console.error)
            .then(response => response.json())
            .then(data => setCountries(data));
    }

    return( 
        <>
            <header id="main-header">
                <h1 id="main-heading" >Exploring the Countries API</h1>
            </header>

            <CountrySelector countries={countries} setSelectedCountry={setSelectedCountry}/>
            <hr/>
                {selectedCountry? <Country country={selectedCountry} addToFavourites={addToFavourites} countries={countries}/> : null}
            <hr/>
            {favourites.length > 0? <Favourites favourites={favourites} setSelectedCountry={setSelectedCountry}/> : null}
        </>
        
    )
}

export default CountriesContainer;