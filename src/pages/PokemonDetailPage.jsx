import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const API_URL = `https://pokeapi.co/api/v2/pokemon`;

const PokemonDetailPage = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();
  const navigate = useNavigate();

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/${name}`);
      const result = await response.json();
      console.log(result);
      setPokemonDetails(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <>
      {!pokemonDetails ? (
        <h2>Loading...</h2>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pokemonDetails.sprites.front_default} />
          <Card.Body>
            <Card.Title>{pokemonDetails.name}</Card.Title>
            <Card.Text>Species : {pokemonDetails.species.name}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/pokemon");
              }}
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default PokemonDetailPage;
