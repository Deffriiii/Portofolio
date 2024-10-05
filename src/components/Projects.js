import React, { useState } from 'react';
import Slider from 'react-slick'; // Import React Slick
import website1 from '../assets/images/website1.png';
import website2 from '../assets/images/website2.png';
import website2_1 from '../assets/images/website2_1.png';
import website2_2 from '../assets/images/website2_2.png';
import website3 from '../assets/images/website3.png';
import website3_1 from '../assets/images/website3_1.png';
import website3_2 from '../assets/images/website3_2.png';
import '../styles/Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [showMore, setShowMore] = useState({});

  const handleShowMoreToggle = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncateText = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return words.slice(0, numWords).join(' ') + '...';
  };

  const projects = [
    {
      title: 'Website Pencari Film',
      description: `Website ini merupakan platform pencari film yang dibangun menggunakan React JS, 
      dengan integrasi API dari IMDb untuk menyediakan informasi terbaru tentang film. 
      Pengguna dapat mencari film favorit, melihat detail seperti sinopsis, rating, dan poster.`,
      image: website1,
      link: 'https://pencari-film.vercel.app/',
    },
    {
      title: 'Anime Finder',
      description: `AnimeFinder adalah platform web untuk memudahkan penggemar anime dalam menemukan 
      dan menelusuri judul anime favorit mereka. Dengan integrasi API Jikan, data yang ditampilkan 
      selalu akurat dan diperbarui.`,
      images: [website2, website2_1, website2_2],
      link: 'https://anime-finder-zeta.vercel.app/',
    },
    {
      title: 'Dynamic Gallery',
      description: `Dynamic Photo Gallery adalah web galeri interaktif yang dibangun dengan React JS, 
      memungkinkan pengguna untuk menjelajahi, melihat detail, dan mengunduh foto-foto dari Unsplash API.`,
      images: [website3, website3_1, website3_2],
      link: 'https://dynamic-gallery-2gitfjone-defris-projects-bad56a0a.vercel.app/',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li className="project-item" key={index}>
            <h3>{project.title}</h3>

            {project.images ? (
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`${project.title} - Gambar ${i + 1}`} className="project-image" />
                  </div>
                ))}
              </Slider>
            ) : (
              <img src={project.image} alt={project.title} className="project-image" />
            )}

            <p>
              {showMore[index] ? project.description : truncateText(project.description, 20)}
            </p>
            <button onClick={() => handleShowMoreToggle(index)} className="show-more-button">
              {showMore[index] ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
            </button>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Lihat Proyek
            </a>
          </li>
        ))}
      </ul>

      <p>
        <i>&copy; 2024 DefriPrasetyo. All rights reserved.</i>
      </p>
    </section>
  );
};

export default Projects;
