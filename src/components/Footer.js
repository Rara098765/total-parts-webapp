import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className='footer-total'>&copy; {new Date().getFullYear()} @TOTALPARTS312</p>
                <div className="footer__links">
                    <div>
                        <Link to="/catalog">Каталог</Link>
                    </div>
                    <div>
                        <Link to="/developers">Наши разработчики</Link>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/2702ooll" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer__contact">
                    <p><strong>Phone:</strong> <a href="tel:+996505228122">+996 505 22 81 22</a></p>
                    <p><strong>Whatsapp:</strong> <a href="tel:+996990909109">+996 990 909 109</a></p>
                    <p><strong>Email:</strong> <a href="mailto:TOTALPARTS312a@gmail.com">TOTALPARTS312a@gmail.com</a></p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;









// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-column">
//           <h4>Меню компании</h4>
//           <ul>
//             <li><Link to="/company-info">Реквизиты и информация</Link></li>
//             <li><Link to="/news">Новости</Link></li>
//             <li><Link to="/careers">Вакансии</Link></li>
//             <li><Link to="/suppliers">Поставщикам</Link></li>
//             <li><Link to="/contact">Контакты</Link></li>
//             <li>Кыргызстан - Бишкек</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Каталоги</h4>
//           <ul>
//             <li><Link to="/original-parts">Оригинальные запчасти</Link></li>
//             <li><Link to="/batteries">Аккумуляторы</Link></li>
//             <li><Link to="/sale">Распродажа</Link></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Помощь</h4>
//           <ul>
//             <li><Link to="/faq">Часто задаваемые вопросы</Link></li>
//             <li><Link to="/payment">Оплата заказа</Link></li>
//             <li><Link to="/delivery">Доставка заказа</Link></li>
//             <li><Link to="/forgot-password">Забыл пароль</Link></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Товары и бренды</h4>
//           <ul>
//             <li><Link to="/brands">Список брендов</Link></li>
//             <li><Link to="/popular-products">Популярные товары</Link></li>
//             <li><Link to="/stock-availability">Наличие на складах</Link></li>
//           </ul>
//         </div>
//       </div>

//       <div className="developers-link">
//         <Link to="/developers" className="developer-button">
//           Наши разработчики
//         </Link>
//       </div>

//       <div className="footer-bottom">
//         <p>@TOTALPARTS312</p>
//         <div className="footer-links">
//           <Link to="/payment-methods">Принимаем к оплате</Link>
//           <Link to="/offer">Оферта</Link>
//           <Link to="/privacy">Конфиденциальность</Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
