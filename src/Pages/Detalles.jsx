import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const consultarInformacion = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const stats = data.stats.map((x) => ({
          name: x.stat.name,
          base: x.base_stat,
        }));
        const image = data.sprites.other.dream_world.front_default;
        const types = data.types.map(({ type }) => type.name).join(" ");
        setPokemon({ name, stats, image, types });
      })

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    consultarInformacion(url);
  }, []);
  console.log(pokemon);
  return (
    <>
      {pokemon ? (
        <div className="carta-padre row">
          <div className="col">
            <div className="imagen-carta">
              <img src={pokemon.image} alt="" className="img" />
            </div>
            <div>
              <h3>{name}</h3>
              <ul>
                {pokemon.stats?.map((info, i) => (
                  <li key={i}>
                    {info.name}: {info.base}
                  </li>
                ))}
              </ul>
              <h5>{pokemon.types}</h5>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Detalle;
