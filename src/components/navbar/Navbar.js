import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';


function Navbar({ scrollToSelects, scrollToDestinations, scrollToSearch, scrollToImgCarousel }) { // Receba as funções como props
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => setNav(!nav);

  const handlePersonClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className='logo-navbar'>
        <a href="/">
        <img src={logo} alt="Logo" />
        </a>
      </div>

      <ul className="nav-menu">
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
        <li onClick={scrollToSelects}>Destinos</li>
        <li onClick={scrollToDestinations}>Viagem</li>
        <li onClick={scrollToSearch}>Reservar</li> {/* Adicionada função para Search */}
        <li onClick={scrollToImgCarousel}>Visualizar</li> {/* Adicionada função para ImgCarousel */}
      </ul>

      <div className="nav-icons">
        <BsPerson className='icon' onClick={handlePersonClick} />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
          <li onClick={scrollToSelects}>Destinos</li>
          <li onClick={scrollToDestinations}>Viagem</li>
          <li onClick={scrollToSearch}>Reservar</li> {/* Adicionada função para Search no mobile */}
          <li onClick={scrollToImgCarousel}>Visualizar</li> {/* Adicionada função para ImgCarousel no mobile */}
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Pesquisar</button>
            <button>Conta</button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
