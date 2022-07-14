import React from "react";
import "./ProductList.css";
import {useEffect,useState} from "react";
import ProductItem from '../components/ProductItem';
import {useDispatch ,useSelector } from "react-redux";
import { getProduct } from './../store/product/productSlice';

const ProductList = () => {

     /* const [products , setProducts]= useState([])
    const dataProducts = async () => {
        try {
            let url = `http://localhost:5005/productList`
            let res = await fetch(url);
            let dataValue = await res.json();
            setProducts(dataValue);
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        dataProducts();
    } ,[]) */

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value); //useSelector는 구독하는 것
   
    useEffect(()=>{
        dispatch(getProduct())
    } ,[])

    return (
        <section className="product-list">
         <h2 className="product-list-title">상품 목록</h2>
        <div className="product-item-container">
           {
            products.map((item)=><ProductItem item={item} key={item.id} />)
           }
        </div>
    </section>
    );
};

export default ProductList;