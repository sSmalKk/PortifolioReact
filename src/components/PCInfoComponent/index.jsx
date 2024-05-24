import { useEffect } from 'react';

const PCInfoComponent = ({ onInfoChange }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        const locationResponse = await fetch(`https://ipinfo.io/${ip}/json`);
        const locationData = await locationResponse.json();

        const info = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          colorDepth: window.screen.colorDepth,
          ipAddress: ip,
          location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
          date: new Date().toLocaleString()
          // Adicione mais informações se desejar
        };
        onInfoChange(info);
      } catch (error) {
        console.error('Erro ao obter informações:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code
    };
  }, [onInfoChange]);

  return null;
};

export default PCInfoComponent;
