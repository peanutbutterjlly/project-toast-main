import React from 'react';
import { useKey } from '../../hooks/use-key-listener';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToasts(message, variant) {
    const toastToAdd = {
      message,
      variant,
      id: Math.random(),
    };
    setToasts([...toasts, toastToAdd]);
  }

  function dismissToasts(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  const handleEscape = React.useCallback(() => setToasts([]), [])

  useKey(handleEscape);

  return (
    <ToastContext.Provider value={{ createToasts, dismissToasts, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
