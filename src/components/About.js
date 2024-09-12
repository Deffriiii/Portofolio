import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      {/* Elemen animasi SVG di sebelah kiri teks */}
      <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 200 200">
          <g>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="3"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="3"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce2"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="3"
              fill="#414750"
              points="70,70 150,50 130,130 50,150"
            ></polygon>
            <polygon
              strokeWidth="3"
              fill="url(#gradiente)"
              points="100,70 150,100 100,130 50,100"
            ></polygon>
            <defs>
              <linearGradient id="gradiente" x1="0%" y1="0%" x2="10%" y2="100%">
                <stop offset="20%" style={{ stopColor: '#1e2026', stopOpacity: 1 }} />
                <stop offset="60%" style={{ stopColor: '#414750', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon
              transform="translate(20, 31)"
              strokeWidth="3"
              fill="#b7870f"
              points="80,50 80,75 80,99 40,75"
            ></polygon>
            {/* Particles */}
            <polygon
              transform="rotate(45 100 100) translate(80, 95)"
              strokeWidth="3"
              fill="#ffe4a1"
              points="5,0 5,5 0,5 0,0"
              id="particles"
            ></polygon>
            <polygon
              transform="rotate(45 100 100) translate(80, 55)"
              strokeWidth="3"
              fill="#ccb069"
              points="6,0 6,6 0,6 0,0"
              id="particles"
            ></polygon>
            <polygon
              transform="rotate(45 100 100) translate(70, 80)"
              strokeWidth="3"
              fill="#fff"
              points="2,0 2,2 0,2 0,0"
              id="particles"
            ></polygon>
          </g>
        </svg>
      </div>

      <div className="about-text">
        <h1>About Me</h1>
        <p>Halo! Saya Defri Prasetyo, fresh graduate Sarjana Rekayasa Perangkat Lunak dengan minat besar dalam
           front-end development. Saya berpengalaman dalam HTML, CSS, dan JavaScript, serta menggunakan React.js
            untuk membangun antarmuka pengguna yang interaktif.
        </p>
        <p>
        Saya antusias untuk terus belajar dan berkontribusi dalam proyek-proyek yang menantang. Terima kasih telah
         mengunjungi portfolio saya. Semoga kita bisa bekerja sama di masa depan!
        </p>

      </div>
    </section>
  );
};

export default About;
