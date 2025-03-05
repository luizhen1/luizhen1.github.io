import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Destinations from '../../components/destinations/Destinations';
import Search from '../../components/search/Search';
import Selects from '../../components/selects/Selects';
import ImgCarousel from '../../components/carousel/ImgCarousel';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  const selectsRef = useRef(null); // Referência para a seção Selects
  const destinationsRef = useRef(null); // Referência para a seção Destinations
  const searchRef = useRef(null); // Referência para a seção Search
  const imgCarouselRef = useRef(null); // Referência para a seção ImgCarousel

  const scrollToSelects = () => {
    selectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    destinationsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearch = () => {
    searchRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToImgCarousel = () => {
    imgCarouselRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar 
        scrollToSelects={scrollToSelects} 
        scrollToDestinations={scrollToDestinations} 
        scrollToSearch={scrollToSearch}
        scrollToImgCarousel={scrollToImgCarousel}
      />
      <Hero />
      <div ref={destinationsRef}>
        <Destinations /> {/* Referência para Destinations */}
      </div>
      <div ref={searchRef}>
        <Search /> {/* Referência para Search */}
      </div>
      <div ref={selectsRef}>
        <Selects /> {/* Referência para Selects */}
      </div>
      <div ref={imgCarouselRef}>
        <ImgCarousel /> {/* Referência para ImgCarousel */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
