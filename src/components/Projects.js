import React, { useState } from 'react';
import website1 from '../assets/images/website1.png';
import '../styles/Projects.css';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // Fungsi untuk toggle 'Lihat Selengkapnya'
  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  // Fungsi untuk memotong teks menjadi n kata
  const truncateText = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return words.slice(0, numWords).join(' ') + '...';
  };

  const description = `Website ini merupakan platform pencari film yang dibangun menggunakan React JS,
  dengan integrasi API dari IMDb untuk menyediakan informasi terbaru tentang film.
  Pengguna dapat mencari film favorit, melihat detail seperti sinopsis, rating, dan poster,
  serta menemukan film-film populer maupun terbaru dengan mudah. Desain yang responsif dan
  antarmuka yang ramah pengguna membuat pengalaman pencarian film menjadi lebih cepat dan efisien.`;

  const description2 = `Website ini merupakan platform pencari film yang dibangun menggunakan React JS,
  dengan integrasi API dari IMDb untuk menyediakan informasi terbaru tentang film.
  Pengguna dapat mencari film favorit, melihat detail seperti sinopsis, rating, dan poster,
  serta menemukan film-film populer maupun terbaru dengan mudah. Desain yang responsif dan
  antarmuka yang ramah pengguna membuat pengalaman pencarian film menjadi lebih cepat dan efisien.`;

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul className="project-list">
        <li className="project-item">
          <h3>Website Pencari Film</h3>
          <img 
            src={website1} 
            alt="Website Pencari Film" 
            className="project-image"
          />
          <p>
            {showMore ? description : truncateText(description, 20)}
          </p>
          <button onClick={handleShowMoreToggle} className="show-more-button">
            {showMore ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
          </button>
          <a 
            href="https://pencari-film.vercel.app/" 
            target="_blank"   
            rel="noopener noreferrer" 
            className="project-link"
          >
            Lihat Proyek
          </a>
        </li>
        <li className="project-item">
          <h3>Website Pencari Film</h3>
          <img 
            src={website1} 
            alt="Website Pencari Film" 
            className="project-image"
          />
          <p>
            {showMore ? description2 : truncateText(description2, 20)}
          </p>
          <button onClick={handleShowMoreToggle} className="show-more-button">
            {showMore ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
          </button>
          <a 
            href="https://pencari-film.vercel.app/" 
            target="_blank"   
            rel="noopener noreferrer" 
            className="project-link"
          >
            Lihat Proyek
          </a>
        </li>
        {/* Tambahkan lebih banyak item proyek di sini jika diperlukan */}
      </ul>

      <p><i>&copy; 2024 DefriPrasetyo. All rights reserved.</i></p>
    </section>
    
  );
};

export default Projects;
