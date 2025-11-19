import { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
      const [error, setError] = useState(null);
  const clearError = () => setError(null);
  const setErrorState = (errorMessage) => setError(errorMessage);

  return (
    <ErrorContext.Provider value={{ error, setError: setErrorState, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export {ErrorContext, ErrorProvider}