import Card from "./components/Card/Card";
import "./styles.css";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import { getPokemon } from "./api.js";
import Pagination from "./components/Pagination/Pagination";

export default function App() {
  let [search, setSearch] = useState("");
  let [limit, setLimit] = useState(20);
  let [offset, setOffset] = useState(0);
  let api = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
  let defa = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0/def`;
  let entro = false;
  let [data, setData] = useState([]);
  let { count } = data;
  let [bicho, setBicho] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const results = await Promise.all(promises);
      setBicho(results);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="home-title">Pokedex App</h1>
      <Search setSearch={setSearch} />

      <div className="cards">
        {bicho &&
          bicho.map((item, index) => {
            entro = false;
            if (item.name.includes(search) || item.name === search) {
              entro = true;

              return <Card key={index} info={item} />;
            }
          })}
      </div>
      <Pagination
        setOffset={setOffset}
        offset={offset}
        limit={limit}
        count={count}
      />
    </div>
  );
}
