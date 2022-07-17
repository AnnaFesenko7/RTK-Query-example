import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../services/pokemon';
import { ThreeDots } from 'react-loader-spinner';
function HomeView() {
  const [pokemonName, setPokemonName] = useState('');

  console.log('pokemonName', pokemonName);
  const { data, error, isFetching, refetch, isUninitialized, isError } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
      pollingInterval: 600000,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('e', e);
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };
  return (
    <>
      <h1>Pokemons</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      <button onClick={refetch} disabled={isUninitialized}>
        Refetch
      </button>
      {data && !isFetching && !isError && (
        <>
          <h1> {data.name}</h1>
          {data.sprites.front_default && (
            <img src={data.sprites.front_default} width="500" alt={data.name} />
          )}
        </>
      )}
      {isFetching && <ThreeDots height="100" width="100" color="red" />}
      {isError && <p>{error.data}</p>}
    </>
  );
}

export default HomeView;
