import './Header.css';
import header__logo from '../../images/iPhone-logo.png';
import { Link, NavLink } from 'react-router-dom';
import profile from "../../images/Profile.png";
import Cart from "../../images/Cart.png";
import close from "../../images/Close.png";
import { useState, useEffect } from 'react';
import { useCart } from '../../data/Cart';
import closeGray from "../../images/CloseGray.png";

export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, removeFromCart } = useCart();
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isCartOpen]);

    const toggleCartModal = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cart.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cart.map(item => item.cartId));
        }
    };

    const handleDeleteSelected = () => {
        selectedItems.forEach(cartId => removeFromCart(cartId));
        setSelectedItems([]);
    };

    const handleCheckboxChange = (cartId) => {
        if (selectedItems.includes(cartId)) {
            setSelectedItems(selectedItems.filter(id => id !== cartId));
        } else {
            setSelectedItems([...selectedItems, cartId]);
        }
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="header__inner">
                        <Link to="/" >
                            <img className="header__logo" src={header__logo} alt="Logo" />
                        </Link>
                        <div className="header_links">
                            <nav className="header__nav nav">
                                <NavLink to="/" className="nav__link">Главная</NavLink>
                                <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                                <NavLink to="/about" className="nav__link">О нас</NavLink>
                            </nav>
                            <div className="header_icons">
                                <img src={profile} alt="Profile" />
                                <img src={Cart} alt="Cart" onClick={toggleCartModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isCartOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal__inner">
                            <div className="modal_header">
                                <div className="modal-title">
                                    <span>Корзина</span>
                                    <img className='close' src={close} alt="Close" onClick={toggleCartModal} />
                                </div>
                                <div className="head-products">
                                    <div className="input-checkbox-all">
                                        <input type="checkbox" 
                                               checked={selectedItems.length === cart.length && cart.length > 0} 
                                               onChange={handleSelectAll} />
                                        <span>Выбрать все</span>
                                    </div>
                                    <div className="btn-delete-all" onClick={handleDeleteSelected}>
                                        <span>Удалить выбранные</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal_body">
                                {cart.length === 0 ? (
                                    <p>Корзина пуста</p>
                                ) : (
                                    <ul className='cart_products'>
                                        {cart.map((item) => (
                                            <div className='cart-product' key={item.cartId}>
                                                <input type="checkbox" 
                                                       checked={selectedItems.includes(item.cartId)}
                                                       onChange={() => handleCheckboxChange(item.cartId)} />
                                                <img className='cart-img' src={item.img} alt="" />
                                                <span className='product__bio'>{item.name} {item.connection} {item.memory}, {item.color}</span>
                                                <span>{item.price} ₽</span>
                                                <img className='close-product' src={closeGray} alt="Close" onClick={() => removeFromCart(item.cartId)} />
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
