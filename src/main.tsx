
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx: Starting application...');
console.log('main.tsx: Current URL:', window.location.href);
console.log('main.tsx: User Agent:', navigator.userAgent);

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error('main.tsx: Root element not found');
    throw new Error('Root element not found');
  }
  
  console.log('main.tsx: Root element found, creating React root...');
  const root = createRoot(rootElement);
  console.log('main.tsx: Rendering App component...');
  root.render(<App />);
  console.log('main.tsx: App rendered successfully');
  console.log('main.tsx: Application fully loaded at:', new Date().toISOString());
} catch (error) {
  console.error('main.tsx: Error during initialization:', error);
}
