import React, { useState } from "react";

const PubChemSubstances = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://massbank.eu/MassBank/Search?query=${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o termo de busca"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>{result.name || "Desconhecido"}</strong> -{" "}
            {result.identifier && (
              <a
                href={`https://massbank.eu/MassBank/RecordDisplay?id=${result.identifier}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Detalhes
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PubChemSubstances;
