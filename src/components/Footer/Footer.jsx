import { Link, NavLink } from 'react-router-dom';
import footer_logo from '../../images/image.png'
import telegram from "../../images/Telegram.png"
import vk from "../../images/VK.png"
import whatsapp from "../../images/WhatsApp.png"
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer_links">
                        <div className="footer-links">
                            <Link to="/" >
                                <img className="footer__logo" src={footer_logo} alt="" />
                            </Link>
                            <div className="footer-icons">
                                <img src={telegram} alt="" />
                                <img src={vk} alt="" />
                                <img src={whatsapp} alt="" />
                            </div>
                        </div>
                        <p>2022-2024, ООО "iPhone"</p>
                    </div>
                    <div className="footer_tags">
                        <nav className="footer__nav nav">
                            <p>Меню</p>
                            <NavLink to="/" className="nav_link">Главная</NavLink>
                            <NavLink to="/catalog" className="nav_link">Каталог</NavLink>
                            <NavLink to="/about" className="nav_link">О нас</NavLink>
                        </nav>
                        <div className="timetable">
                            <p>Время работы</p>
                            <p>Пн - Пт с 9:00 до 18:00</p>
                            <p>Сб - Вс, праздники - выходной</p>
                        </div>
                        <div className="contacts">
                            <p>Контакты</p>
                            <p>Тел: +7 999 999 99 99</p>
                            <p>Почта: example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}