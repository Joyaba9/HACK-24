import React from "react";
import "./similar_product_prediction.css";
import similar_products from "./similar_product_data.json";
import { useState } from "react";


const SimilarProductPrediction = () => {
    const [product, setProduct] = useState("Furniture");
    const [category, setCategory] = useState("Bookcases");
    const [similarProducts, setSimilarProducts] = useState([]);
    
    const handleProductChange = (e) => {
        setProduct(e.target.value);
    };
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    
    const handlePredictClick = () => {
        // Get similar products from the JSON file
        const products = similar_products[product][category];
        setSimilarProducts(products);
    };
    
    return (
        <div className="similar-product-container">
        <h1>Similar Product Prediction</h1>
        <div className="input-container">
            <label htmlFor="product">Product:</label>
            <select id="product" value={product} onChange={handleProductChange}>
            {Object.keys(similar_products).map((product) => (
                <option key={product} value={product}>
                {product}
                </option>
            ))}
            </select>
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={handleCategoryChange}>
            {Object.keys(similar_products[product]).map((category) => (
                <option key={category} value={category}>
                {category}
                </option>
            ))}
            </select>
            <button onClick={handlePredictClick}>Predict</button>
        </div>
        <div className="prediction-container">
            <h2>Similar Products</h2>
            <ul>
            {similarProducts.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
            </ul>
        </div>
        </div>
    );
    };
    