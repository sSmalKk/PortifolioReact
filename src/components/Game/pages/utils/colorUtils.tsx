/**
 * 🔥✨ **ATENÇÃO! ZONA DE CÓDIGOS DE CORES** ✨🔥
 * 
 * 📌 Este arquivo é exclusivo para scripts relacionados ao cálculo e manipulação de CORES.
 *    Qualquer funcionalidade que envolva REAÇÕES QUÍMICAS ou propriedades químicas DEVE 
 *    ser movida para o local apropriado (por exemplo, `chemicalReactions.ts` ou similar).
 * 
 * 🚨 Qualquer tentativa de adicionar lógica química, manipulação molecular, ou cálculo não relacionado a cores aqui será REJEITADA!
 * 
 * 💡 A ideia é manter este arquivo ENXUTO e dedicado exclusivamente à lógica de cores,
 *    como gradientes, transições, ou cálculos de temperatura e cor.
 * 
 * 🎨 Exemplos do que este arquivo DEVE conter:
 *    - Cálculo de cores com base em temperatura (como `calculateColorByTemperature`).
 *    - Gradientes, conversões de paleta e afins.
 * 
 * 🚫 Exemplos do que NÃO DEVE estar aqui:
 *    - Modelagem de reações químicas.
 *    - Alteração de propriedades físicas baseadas em materiais.
 *    - Scripts gerais de química ou física.
 * 
 * Se você tiver dúvidas, consulte o mantenedor ou documente melhor suas intenções antes de tocar neste santuário das cores! 🌈
 */
export const calculateColorByTemperature = (temperature: number, baseColor: string): string => {
  const normalizedTemp = Math.min(1, Math.max(0, (temperature - 300) / (10000 - 300)));
  const [r, g, b] = baseColor.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [255, 255, 255];
  const newR = Math.min(255, Math.round(r + (255 - r) * normalizedTemp));
  const newG = Math.min(255, Math.round(g * (1 - normalizedTemp)));
  const newB = Math.min(255, Math.round(b * (1 - normalizedTemp)));
  return `rgb(${newR}, ${newG}, ${newB})`;
};

export const calculateColorHandler = (type: string, ...args: [number, string]): string => {
  switch (type) {
    case "temperature":
      return calculateColorByTemperature(...args); // Tipos estão garantidos aqui
    // Outros métodos de cálculo de cor podem ser adicionados aqui
    default:
      throw new Error(`Unknown color calculation type: ${type}`);
  }
};

// Exportação para compatibilidade
const calculateColor = (temperature: number, baseColor: string): string => {
  return calculateColorHandler("temperature", temperature, baseColor);
};

export default calculateColor;
