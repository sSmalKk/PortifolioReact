import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useMaterialsStore } from "../../store/materialsStore";
import { useDivineForge } from "../../store/divineForgeStore";
import calculateColor from "./utils/colorUtils";
import { listMaterials } from "./api/materialService";

const MaterialCRUD: React.FC = () => {
  const [temperature, setTemperature] = useState(300); // Temperatura inicial
  const [currentPage, setCurrentPage] = useState(1); // Página inicial para paginação
  const [isLoading, setIsLoading] = useState(false); // Controle de carregamento
  const {
    pageMaterials,
    addMaterial,
    addPageMaterial,
    updateMaterial,
  } = useMaterialsStore();
  const { selectedMaterial, selectMaterial } = useDivineForge();

  const token = localStorage.getItem("token") || process.env.JWT || "";

  // Fetch Materiais
  const fetchMaterials = async (page: number) => {
    if (isLoading) return; // Evitar múltiplos carregamentos simultâneos
    setIsLoading(true);

    try {
      const response = await listMaterials(token, page, 10); // Tamanho da página ajustado
      const fetchedMaterials = response.data.data;

      fetchedMaterials.forEach((material: any) => {
        const baseColor =
          (material.baseColors && material.baseColors[0]) || "#FFFFFF";

        const currentColor = calculateColor(temperature, baseColor);

        addMaterial(material.id, {
          id: material.id,
          name: material.name,
          symbol: material.symbol,
          baseColor,
          currentColor,
          temperature,
        });

        addPageMaterial(material.id, {
          id: material.id,
          name: material.name,
          symbol: material.symbol,
          baseColor,
          currentColor,
          temperature,
        });
      });

      setCurrentPage(page); // Atualiza a página atual
    } catch (error) {
      console.error("Erro ao buscar materiais:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Atualiza temperatura média da página
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTemperature = parseInt(e.target.value, 10);
    setTemperature(newTemperature);

    // Atualizar as cores de todos os materiais na página
    Object.keys(pageMaterials).forEach((id) => {
      const material = pageMaterials[id];
      const newColor = calculateColor(
        newTemperature,
        material.baseColor
      );
      updateMaterial(id, { currentColor: newColor, temperature: newTemperature });
    });
  };

  // Handle scroll para carregar mais páginas
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    // Se o scroll atingir o final, carrega a próxima página
    if (scrollHeight - scrollTop <= clientHeight + 50 && !isLoading) {
      fetchMaterials(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchMaterials(1); // Carregar a primeira página ao iniciar
  }, []);

  return (
    <div
      className="container mx-auto p-4"
      style={{ maxHeight: "80%", overflowY: "auto" }}
    >
      <Helmet>
        <title>Gerenciamento de Materiais</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Materiais</h1>

      {/* Barra de temperatura */}
      <div className="mb-4">
        <label>Temperatura Média: {temperature} K</label>
        <input
          type="range"
          min="0"
          max="10000"
          value={temperature}
          onChange={handleTemperatureChange}
          style={{ width: "100%" }}
        />
      </div>

      {/* Materiais da Página */}
      <h2 className="text-xl font-bold mb-2">Materiais na Página</h2>
      <div
        onScroll={handleScroll}
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nome</th>
              <th className="border border-gray-300 px-4 py-2">Símbolo</th>
              <th className="border border-gray-300 px-4 py-2">Cor Atual</th>
              <th className="border border-gray-300 px-4 py-2">Ação</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(pageMaterials).map((material) => (
              <tr key={material.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {material.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {material.symbol}
                </td>
                <td
                  className="border border-gray-300 px-4 py-2"
                  style={{ backgroundColor: material.currentColor }}
                >
                  {material.currentColor}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() =>
                      selectMaterial({
                        id: material.id,
                        name: material.name,
                        color: material.currentColor,
                      })
                    }
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Divine Forge */}
      <h2 className="text-xl font-bold mb-2 mt-4">Divine Forge</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        {selectedMaterial ? (
          <div>
            <h3>Material Selecionado:</h3>
            <p>
              <strong>Nome:</strong> {selectedMaterial.name}
            </p>
            <p>
              <strong>Temperatura:</strong> 300 K
            </p>
            <p>
              <strong>Cor:</strong>{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: selectedMaterial.color,
                }}
              ></span>
            </p>
          </div>
        ) : (
          <p>Nenhum material selecionado</p>
        )}
      </div>
    </div>
  );
};

export default MaterialCRUD;
