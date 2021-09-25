import HomeArea from "./HomeStyled";

import { useState } from "react";

function Home() {
  let [digimon, setDigimon] = useState([
    "Pesquise um digimon!",
    "Pesquise um digimon!",
    "https://criticalhits.com.br/wp-content/uploads/2021/07/digimon-adventure-historia-personagens-sucesso-e-reboot.jpg"
  ]);

  function acharDigimon() {
    let nomeDoDigimon = document.getElementById("entrada").value;

    const URL =
      "https://digimon-api.herokuapp.com/api/digimon/name/" + nomeDoDigimon;

    fetch(URL)
      .then((response) => response.json()) //retorna uma promise
      .then((result) => {
        console.log(result[0].name);
        digimon = [result[0].name, result[0].level, result[0].img];
        setDigimon(digimon);
      })
      .catch((err) => {
        // trata se alguma das promises falhar
        console.error("Failed retrieving information", alert("Digimon não encontrado em nossa base de dados!"));
      });
  }
  return (
    <HomeArea>
      <h1>Vamos procurar o seu digimon favorito?</h1>
      <input
        id="entrada"
        type="text"
        placeholder="digite o nome do digimon">
       </input>
      <button onClick={acharDigimon}>Procurar Digimon</button>
      <h2>Nome: {digimon[0]}</h2>
      <h2>Nível: {digimon[1]}</h2>
      <img src={digimon[2]} alt={digimon[0]} id="imagem"></img>
    </HomeArea>
  );
}

export default Home;
