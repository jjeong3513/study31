import React from 'react';
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
const ProductItem = ({item}) => {
    const navigate = useNavigate();
    const goToDetail = (id) => {
        navigate(`/productList/${id}`)
    }
    return (
        <div className="product-item" onClick={()=>goToDetail(item.id)}>
        <img
            className="item-image" 
            alt="product"
            src={item.product_img} 
         />
        <div className="item-name" >{item.product_name}</div>
        <div className="item-price">{item.price}원</div>
    </div>
    );
};

export default ProductItem;