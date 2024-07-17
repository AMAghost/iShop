import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import Form from 'react-bootstrap/Form';
import './Catalog.css';

export function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredProducts = store.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearchTerm && matchesCategory;
    });

    return (
        <>
            <div className="catalog_title">
                <h1 className="catalog__title">Каталог</h1>
                <input
                        type="text"
                        placeholder="Поиск по названию"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />

                    
                    <Form.Select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-select"
                    aria-label="Default select example"
                    >
                        
                        <option className='categories' value="">Категории</option>
                        {[...new Set(store.map(product => product.category))].map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </Form.Select>
            </div>

            <div className="catalog-products">
                {
                    filteredProducts.map(product => (
                        <article key={product.id} className="product">
                            <img className='product-img' src={product.img} alt={product.name} />
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
        </>
    );
}