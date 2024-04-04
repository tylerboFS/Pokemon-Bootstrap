import { useEffect, useState } from "react";

const SearchBar = ({ allPokemon, setPokemonToDisplay }) => {
  //need a state to track the input
  const [searchParam, setSearchParam] = useState("");

  //Need The full list from props

  //Filter the full list based on search input
  //update the display to display the filtered list
  useEffect(() => {
    const filteredList = allPokemon.filter((pokemon) => {
      //Add any pokemon where the name includes the search param
      //Both the name and the search are converted to lowercase for comparison
      return pokemon.name.toLowerCase().includes(searchParam.toLowerCase());
    });
    setPokemonToDisplay(filteredList);
  }, [searchParam]);

  return (
    <>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-warning"
          type="button"
          id="button-addon1"
        >
          Search
        </button>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Search For Pokemon"
          aria-label="Pokemon Search Bar"
          value={searchParam}
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
export default SearchBar;
