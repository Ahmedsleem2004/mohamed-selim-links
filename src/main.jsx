
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import portrait from './assets/mohamed-selim.jpg';

const icons = {
  company: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),

  ig: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1.3"
        fill="currentColor"
      />
    </svg>
  ),

  web: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),

  wa: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2A9.94 9.94 0 0 0 3.4 16.9L2 22l5.24-1.37A9.99 9.99 0 1 0 12.04 2Zm0 18.16a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.1.81.83-3.02-.2-.31A8.17 8.17 0 1 1 12.04 20.16Zm4.48-6.12c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06a6.64 6.64 0 0 1-1.96-1.21 7.3 7.3 0 0 1-1.36-1.7c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  ),
};

const links = [
  {
    id: 'company',
    title: 'M.A.S Development',
    subtitle: 'Official Company Website',
    url: 'https://masdevco.com',
  },
  {
    id: 'ig',
    title: 'Instagram',
    subtitle: '@cap_butcher',
    url: 'https://www.instagram.com/cap_butcher?vrfl=MTcya3lkcnFlYWV4OQ==',
  },
  {
    id: 'web',
    title: 'Portfolio',
    subtitle: 'View my professional work',
    url: 'https://mohamed-selim-portfolio.vercel.app/',
  },
  {
    id: 'wa',
    title: 'WhatsApp',
    subtitle: '+966 53 926 3604',
    url: 'https://wa.me/966539263604',
  },
];

function App() {
  return (
    <main className="panel">
      <div className="profile">
        <div className="avatar-frame">
          <img
            className="avatar"
            src={portrait}
            alt="Mohamed Selim Ismail"
          />
        </div>

        <h1>Mohamed Selim Ismail</h1>
        <p className="role">Sales Manager</p>
      </div>

      <nav className="links" aria-label="Social and contact links">
        {links.map((link) => (
          <a
            key={link.id}
            className={`link-card ${link.id}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="symbol">
              {icons[link.id]}
            </span>

            <span className="info">
              <strong>{link.title}</strong>
              <small>{link.subtitle}</small>
            </span>

            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </nav>

      <footer>
        © {new Date().getFullYear()} Mohamed Selim Ismail
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
