import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { 
    FaCar, 
    FaTools, 
    FaWrench, 
    FaCarAlt, 
    FaLightbulb, 
    FaBatteryHalf, 
    FaOilCan, 
    FaTachometerAlt, 
    FaHeadphones, 
    FaStar, 
    FaCalendarAlt, 
    FaLock 
} from 'react-icons/fa';
import ProductSection from '../components/ProductSection';
import image1 from '../images/image1.JPG';
import image2 from '../images/image2.jpg';
import '../styles/HomePage.css';
import video1 from '../components/videos/video1.mp4';

const services = [
    { icon: <FaCar />, label: 'Оригинальные запчасти' },
    { icon: <FaTools />, label: 'Неоригинальные запчасти' },
    { icon: <FaWrench />, label: 'Запчасти для ТО' },
    { icon: <FaCarAlt />, label: 'Автомобили' },
    { icon: <FaLightbulb />, label: 'Автолампы' },
    { icon: <FaBatteryHalf />, label: 'Аккумуляторы' },
    { icon: <FaOilCan />, label: 'Автомасла' },
    { icon: <FaTachometerAlt />, label: 'Диски' },
    { icon: <FaHeadphones />, label: 'Автохимия' },
    { icon: <FaStar />, label: 'Автостекла' },
    { icon: <FaCalendarAlt />, label: 'Гарантия' },
    { icon: <FaLock />, label: 'Безопасность' },
];

const HomePage = ({ addToCart, onAddProduct }) => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);

    // Добавление продукта в соответствующую категорию
    const handleAddProduct = (newProduct) => {
        if (newProduct.category === 'Рекомендуемые') {
            setRecommendedProducts((prev) => [...prev, newProduct]);
        } else if (newProduct.category === 'Топ продаж') {
            setTopSellingProducts((prev) => [...prev, newProduct]);
        } else {
            alert('Категория должна быть "Рекомендуемые" или "Топ продаж"');
        }
    };

    return (
        <div>
            {/* Карусель */}
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="Первый слайд" />
                   
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Второй слайд" />

                </Carousel.Item>
            </Carousel>

            {/* Услуги */}
            <h2>Наши услуги</h2>
            <div className="button-container">
                {services.map((service, index) => (
                    <button
                        key={index}
                        className="custom-button"
                        onClick={() => console.log(`Кнопка ${service.label} была нажата`)}
                    >
                        {service.icon} {service.label}
                    </button>
                ))}
            </div>

            {/* Кнопки для Рекомендуемых и Топ продаж */}
            <div className="category-buttons-container">
                <button type="button" className="category-button">
                    Рекомендуемые
                </button>
                <button type="button" className="category-button">
                    Топ продаж
                </button>
                <button type="button" className="category-button">
                    Товары по Акции
                </button>
                <button type="button" className="category-button">
                    Скидки
                </button>
            </div>

            {/* Видео */}
            <div className="video-container">
                <h3>Наши Видео</h3>
                <div className="video-wrapper">
                    <video width="50%" controls>
                        <source src={video1} type="video/mp4" />
                        Ваш браузер не поддерживает элемент video.
                    </video>
                </div>
            </div>

            {/* Адрес и карта */}
            <div className="address-container">
                <h3>Наш Адрес</h3>
                <p>г. Бишкек Салымбеков Университет</p>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.0758537815316!2d74.60009076350774!3d42.84427180784137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec987f324329b%3A0x2cd99bcd0df5fc1f!2z0KHQsNC70YvQvNCx0LXQutC-0LIg0KPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2skg!4v1733739200729!5m2!1sru!2skg"
                        width="100%"  // Устанавливаем ширину карты на 100%
                        height="450"
                        style={{ border: '0' }}  // Правильный объект с ключом и значением для стилей
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
