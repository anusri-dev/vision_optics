import { StrictMode, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingScreen } from '@/components/LoadingScreen';
import App from './App.tsx';
import './index.css';

function Root() {
  const [loading, setLoading] = useState(true);

  const handleDone = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <StrictMode>
      {loading && <LoadingScreen onDone={handleDone} />}
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
