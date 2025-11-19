import { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({
    hasError: false,
    message: null,
    code: null,
  });
  const clearError = () =>
    setError({
      hasError: false,
      message: null,
      code: null,
    });
  const setErrorState = (errorInfo) => {
    setError({
      hasError: true,
      message: errorInfo.message,
      code: errorInfo.code,
    });
  };
  return (
    <ErrorContext.Provider
      value={{ error, setError: setErrorState, clearError }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
