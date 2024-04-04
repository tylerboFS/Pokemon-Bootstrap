import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

const AllPokemonPage = () => {
  //State that holds all the pokemon
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);

  const navigate = useNavigate();

  //Something that fetches the pokemon AND set the state
  const fetchAllPokemon = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result.results);
      setAllPokemon(result.results);
      setPokemonToDisplay(result.results);
    } catch (err) {
      console.error(err);
    }
  };

  //Call the function that fetches the pokemon
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <>
      <h2>All Pokemon!</h2>
      <SearchBar
        allPokemon={allPokemon}
        setPokemonToDisplay={setPokemonToDisplay}
      />
      {/* //display the name of each pokemon in the allPokemon array */}
      {pokemonToDisplay.map((pokemon) => {
        return (
          <div
            key={`Pokemon_${pokemon.name}`}
            className="card btn btn-warning"
            onClick={() => {
              //when the button is clicked, naviagate to a detail page
              navigate(`/pokemon/${pokemon.name}`)
            }}
          >
            <div className="card-body">{pokemon.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default AllPokemonPage;
