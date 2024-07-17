import './Home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import X1 from '../../images/X.png'
import X2 from '../../images/X2.png'
import X3 from '../../images/X3.png'
import Carousel from 'react-bootstrap/Carousel';
import check_mark from '../../images/Check.png';

export function Home() {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена:', email)
        alert('Спасибо за подписку!')
        setEmail('');
    };

    return (
        <div className="home">
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img src={X1} alt="First slide" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={X2} alt="Second slide" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={X3} alt="Third slide" className="d-block w-100" />
                    </Carousel.Item>
                </Carousel>
            </div>

            <section className="catalog">
                <div className="catalog__inner">
                    <div className="catalog--title">
                        <h1>Товары</h1>
                    </div>
                    <div className="catalog_products">
                        <div className="products-inner">
                            {
                                store.slice(0, 3).map(product => (
                                    <article key={product.id} className="product">
                                                <img className='product-img' src={product.img} alt="" />
                                                <div className="product-inner">
                                                    <div className="product-bio">
                                                        <div className="product-name">
                                                            <p>{product.name}</p>
                                                        </div>
                                                        <div className="bio">
                                                            <p>{product.connection} {product.memory}, {product.color}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                        <p>{product.price} ₽</p>
                                                        <Link to={`/catalog/${product.id}`}>
                                                            <button className="btn-price">Купить</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                    </article> 
                                ))
                            }
                        </div>
                        <Link to='/catalog'>
                            <button className='catalog-next'>Перейти к каталогу</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div className="newsletter_inner">
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <h1>Оставайтесь с нами на связи!</h1>
                        <div className="newsletter-form">
                            <div className="form_email">
                                <input className='form-email' value={email} onChange={handleInputChange} type="email" placeholder='Ваш e-mail' style={{ color: email ? 'black' : '#797979' }}/>
                                <p>Подписываясь на рассылку, вы соглашаетесь с <u>условиями оферты</u> и <u>политикой конфиденциальности</u></p>
                            </div>
                            <input className='form-send' type="submit" value="Отправить" />
                        </div>
                    </form>
                </div>
            </section>
            
        </div>
    );
}
