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
            .then(countryObjectsArray => {
                countryObjectsArray.sort(sortCountriesByCommonName);
                setCountries(countryObjectsArray);
            }
        );
    }

    const sortCountriesByCommonName = (a, b) => {
        const countryNameA = a.name.common.toUpperCase();
        const countryNameB = b.name.common.toUpperCase();
        if (countryNameA < countryNameB) {return -1}
        if (countryNameA > countryNameB) {return 1}
        return 0;
    }

    const getTotalPopulation = () => {
        let total = countries.reduce( 
        (runningTotal, country) => {
            return runningTotal + country.population;
        }, 0);
        return total;
    }

    const totalPopulation = getTotalPopulation().toLocaleString('en', {useGrouping:true});


    return( 
        <main>
            <header id="main-header">
                <h1 id="main-heading" >Exploring the Countries API</h1>
            </header>
            <nav id="selector-nav">
                <h3>Select a country:</h3>
                <div>
                    <CountrySelector 
                        countries={countries} 
                        setSelectedCountry={setSelectedCountry}
                    />
                </div>
            <h3 id="population-header">Total World Population:   {totalPopulation}</h3>
            </nav>
            
            <div className="cards-container">
                {selectedCountry ? 
                    <Country 
                        country={selectedCountry} 
                        addToFavourites={addToFavourites} 
                        countries={countries}
                        setSelectedCountry={setSelectedCountry}
                    />
                    : null
                }
                {favourites.length > 0 ? <Favourites favourites={favourites} setSelectedCountry={setSelectedCountry}/> : null}
            </div>
        </main>
        
    )
}

export default CountriesContainer;