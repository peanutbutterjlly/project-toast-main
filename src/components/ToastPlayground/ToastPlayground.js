import React from 'react';
import Button from '../Button';

import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const toastToAdd = {
      message,
      variant,
      id: Math.random(),
    };
    setToasts([...toasts, toastToAdd])
    setVariant(VARIANT_OPTIONS[0]);
    setMessage('');
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((opt, idx) => (
              <label key={idx} htmlFor={`variant-${opt}`}>
                <input
                  checked={variant === opt}
                  id={`variant-${opt}`}
                  type="radio"
                  name="variant"
                  value={opt}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
