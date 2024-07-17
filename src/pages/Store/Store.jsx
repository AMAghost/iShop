import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Store.css';

export function Store() {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products', { 'Content-type': 'application/json; charset=utf-8' });
            const data = await response.json();
            setProducts(data.products);

            const uniqueCategories = [...new Set(data.products.map(product => product.category))];
            setCategories(uniqueCategories);
        }

        getProducts();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Каталог</h1>
            <form onSubmit={e => e.preventDefault()}>
                <input className="search" onChange={e => setSearchText(e.target.value)} type="text" placeholder="Поиск" value={searchText} />
            </form>
            <div className="filter">
                <select onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
                    <option value="">Все категории</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="body">
                <div className="catalog__inner">
                    {
                        products ? products
                            .filter(product => 
                                product.title.toLowerCase().includes(searchText.toLowerCase()) &&
                                (selectedCategory === '' || product.category === selectedCategory)
                            )
                            .map((product) => (
                                <div className="product" key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <div className="product-inner">
                                        <div className="product-bio">
                                            <div className="product-name">
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="bio">
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <p>{product.price} ₽</p>
                                            <Link to={`/product/${product.id}`}>
                                                <button className="btn-price">Купить</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Загрузка данных...</p>
                    }
                </div>
            </div>

            
        </div>
    );
}
