import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSelect, setPokemonSelect] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const consultarapi = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);

        setPokemones(data.results);
      })

      .catch((error) => console.log(error));
  };
  const gopokemondetalle = async () => {
    if (pokemonSelect) navigate(`/pokemones/${pokemonSelect}`);
    else alert("debes selecionar un pokemon");
    {
    }
  };
  useEffect(() => {
    consultarapi(url);
  }, []);

  return (
    <>
      <div className="padre">
        <div className="contenedor-form">
          <div className="texto-pokemon mb-3">
            <h4 className="text-center">Selecciona un pokemon que te guste</h4>
          </div>
          <select
            value={pokemonSelect}
            onChange={({ target }) => setPokemonSelect(target.value)}
            placeholder="Pokemones"
            className="select"
          >
            <option>Pokemones</option>
            {pokemones.map((pokemon, i) => (
              <option key={i}>{pokemon.name}</option>
            ))}
          </select>
          <div className="text-center mt-3">
            <button onClick={gopokemondetalle} className="boton">
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemones;
