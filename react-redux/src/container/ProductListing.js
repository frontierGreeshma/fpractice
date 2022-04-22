import React, { useEffect } from "react"
import { axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const res = await response.json();
            dispatch(setProducts(res));
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Products: ", products)

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing