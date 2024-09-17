import React, { useState } from 'react';
import Slider from "react-slick"; // Import React Slick
import website1 from '../assets/images/website1.png';
import website2 from '../assets/images/website2.png'; // Gambar pertama proyek kedua
import website2_1 from '../assets/images/website2_1.png'; // Gambar kedua proyek kedua
import website2_2 from '../assets/images/website2_2.png'; // Gambar ketiga proyek kedua
import '../styles/Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const handleShowMoreToggle2 = () => {
    setShowMore2(!showMore2);
  };

  const truncateText = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return words.slice(0, numWords).join(' ') + '...';
  };

  const description1 = `Website ini merupakan platform pencari film yang dibangun menggunakan React JS,
  dengan integrasi API dari IMDb untuk menyediakan informasi terbaru tentang film.
  Pengguna dapat mencari film favorit, melihat detail seperti sinopsis, rating, dan poster,
  serta menemukan film-film populer maupun terbaru dengan mudah. Desain yang responsif dan
  antarmuka yang ramah pengguna membuat pengalaman pencarian film menjadi lebih cepat dan efisien.`;

  const description2 = `AnimeFinder adalah platform web yang dibuat menggunakan React JS, dirancang untuk memudahkan penggemar anime dalam menemukan dan menelusuri judul anime favorit mereka. Website ini menawarkan fitur pencarian yang memungkinkan pengguna menemukan anime berdasarkan judul, lengkap dengan poster, durasi, dan sinopsis singkat. Dengan integrasi API Jikan, data yang ditampilkan selalu akurat dan diperbarui.

Selain pencarian, AnimeFinder juga menampilkan daftar anime populer dan rekomendasi terbaru. Setiap anime dilengkapi dengan informasi detail seperti sinopsis, rating, dan tahun rilis. Antarmuka yang responsif.`;

  // Konfigurasi slider untuk proyek kedua
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul className="project-list">

        {/* Proyek Pertama */}
        <li className="project-item">
          <h3>Website Pencari Film</h3>
          <img 
            src={website1} 
            alt="Website Pencari Film" 
            className="project-image"
          />
          <p>
            {showMore ? description1 : truncateText(description1, 20)}
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

        {/* Proyek Kedua */}
        <li className="project-item">
          <h3>Aplikasi Pengelola Tugas</h3>

          {/* Slider untuk proyek kedua */}
          <Slider {...sliderSettings}>
            <div>
              <img 
                src={website2} 
                alt="Aplikasi Pengelola Tugas - Gambar 1" 
                className="project-image"
              />
            </div>
            <div>
              <img 
                src={website2_1} 
                alt="Aplikasi Pengelola Tugas - Gambar 2" 
                className="project-image"
              />
            </div>
            <div>
              <img 
                src={website2_2} 
                alt="Aplikasi Pengelola Tugas - Gambar 3" 
                className="project-image"
              />
            </div>
          </Slider>

          <p>
            {showMore2 ? description2 : truncateText(description2, 20)}
          </p>
          <button onClick={handleShowMoreToggle2} className="show-more-button">
            {showMore2 ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
          </button>
          <a 
            href="https://anime-finder-zeta.vercel.app/" 
            target="_blank"   
            rel="noopener noreferrer" 
            className="project-link"
          >
            Lihat Proyek
          </a>
        </li>

      </ul>

      <p><i>&copy; 2024 DefriPrasetyo. All rights reserved.</i></p>
    </section>
  );
};

export default Projects;
