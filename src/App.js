import React from 'react';

//definindo o model dos filmes
function Filmeitem({ titulo, ano }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Ano: {ano}</p>
    </div>
  );
}


function Lista_Filmes({ filmes }) {
  return (
    <div>
      <h2>Lista de filmes</h2>
      {filmes.map((filme, indice) => (
        <Filmeitem key={indice} titulo={filme.titulo} ano={filme.ano} />
      ))}
    </div>
  );
}

// Definindo a lista de filmes 
const filmes = [
  { titulo: 'Vovó... Zona', ano: 2000 },
  { titulo: 'Click', ano: 2006 },
  { titulo: 'Piratas do Cariabe - A Maldição do Pérola Negra', ano: 2003 },
  { titulo: 'Sharknado', ano: 2013 },
  { titulo: 'Birdemic: Choque e Terror', ano: 2010 },
];

// Componente principal do app
function App() {
  return (
    <div>
      <Lista_Filmes filmes={filmes} />
    </div>
  );
}

export default App;
