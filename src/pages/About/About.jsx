import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import check_mark from '../../images/Check.png';
import "./About.css"

export function About() {
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
        <>
            <div className="about_company">
                <h1>О компании</h1>
                <p>Мы представляем в зале большее количество техники и вы можете оценить функциональность всех устройств.</p>
            </div>

            <section className="advantages">
                <div className="advantages__inner">
                    <h1>Наши Преимущества</h1>
                    <div className="advantages__list">
                        <div className="advantage">
                            <img className='advantage_img' src={check_mark} alt="" />
                            <h2>Преимущество 1</h2>
                            <p>Высокое качество продукции и сервисное обслуживание.</p>
                        </div>
                        <div className="advantage">
                            <img className='advantage_img' src={check_mark} alt="" />
                            <h2>Преимущество 2</h2>
                            <p>Конкурентоспособные цены на весь ассортимент.</p>
                        </div>
                        <div className="advantage">
                            <img className='advantage_img' src={check_mark} alt="" />
                            <h2>Преимущество 3</h2>
                            <p>Быстрая доставка по всей стране.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Надежная ли мы компания?</Accordion.Header>
                    <Accordion.Body>
                    Не сомневайтесь! Мы одни из самых надежных компаний по продаже Айфонов на сегодняшний день, предоставляя вам разные вариации цветов, памяти, моделей и многого другого.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Оригинальные ли у нас товары?</Accordion.Header>
                    <Accordion.Body>
                    Абсолютно все телефоны у нас оригинальные, подтвердить мы можем предоставляя лицензию при покупке товара, а также оформлении заказа.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Есть ли у нас гарантии</Accordion.Header>
                    <Accordion.Body>
                    Гарантии у нас есть 1-2 года, в зависимости от цены и модели товара. Гарантия оформляется автоматически, где вам сразу выдается чек с этой самой гарантией.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

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
        </>
    )
}