import React from "react";

const UseFetch = ({ url, api, onMessageSent }) => {
  const executeFetch = async (formData) => {
    try {
      const response = await fetch(url + api, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Device-Secret': 'myjwtdevicesecret',
          'Credentials': 'include'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        onMessageSent("SUCCESS", result);
      } else {
        onMessageSent("ERROR", result.message || "Something went wrong");
      }
    } catch (error) {
      onMessageSent("ERROR", error.message || "Network error");
    }
  };

  return { executeFetch };
};

export default UseFetch;