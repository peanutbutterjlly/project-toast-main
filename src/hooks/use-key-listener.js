import React from 'react';

/**
 * Hook that listens for a specific key press and triggers a callback function.
 *
 * @param {function} callback - The function to be called when the specified key is pressed.
 * @param {string} [key='Escape'] - The key to listen for. Defaults to 'Escape'.
 * @return {void} This hook does not return anything.
 */
export function useKey(callback, key='Escape') {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, key]);
}
