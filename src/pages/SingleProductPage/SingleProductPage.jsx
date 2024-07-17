import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';
import { useCart } from '../../data/Cart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SingleProductPage() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = store.find(product => product.id == id);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} добавлен в корзину!`);
    };

    return (
        <section className='prod'>
            <div className="prod-img">
                <img src={product.img} alt="" />
            </div>
            <div className="prod-inner">
                <div className="prod-body">
                    <h1 className="prod-title">{product.name}</h1>
                    <div className="prod-bio">
                        <p>Характеристики</p>
                        <p>Цвет - {product.color}</p>
                        <p>Память - {product.memory}</p>
                        <p>Связь - {product.connection}</p>
                    </div>
                </div>
                <div className="prod-price">
                    <div className="price">{product.price} ₽</div>
                    <button className="btn_cart" onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                    <button className="btn_price">Купить</button>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </section>
    );
}

export default SingleProductPage;
