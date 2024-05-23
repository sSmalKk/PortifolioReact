import React, { useEffect, useState } from "react";

const Notification = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        display: isVisible ? "block" : "none",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
