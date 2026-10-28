import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prerendered blog pages are served as pure static HTML for SEO:
// no React mounting on those pages.
const isStaticBlogPage =
  document
    .querySelector('meta[name="prerender-static-page"]')
    ?.getAttribute('content') === 'blog';

if (!isStaticBlogPage) {
  createRoot(document.getElementById('root')!).render(<App />);
}
