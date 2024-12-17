import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faClock, faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обработчик для скроллинга
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Тоггл для открытия/закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Логотип" className="logo-image" />
            <h5 className="site-name"><strong>Total</strong>Parts.kg</h5>
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Введите товар" className="search-input" />
          <button className="header-search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link>
          <Link to="/catalog" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* <div className="top-bar">
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Кыргызстан - Бишкек</span>
        </div>
        <div className="hours">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <span>MON - SAT: 10:00 AM - 20:00 PM</span>
        </div>
        <div className="social-links">
          <a 
            href="https://wa.me/996990909109" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
          <a 
            href="https://www.instagram.com/2702ooll" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
