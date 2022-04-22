import React, {useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/action/productActions";

const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    const productId = useParams();
    console.log(productId);
    console.log(product);

    const { title, image, price, category, description } = product;

    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId.productId}`);
            console.log("hi");
            const res = await response.json();
            console.log(res);

            dispatch(selectedProducts(res));
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail()
        }
    }, [productId])

    return (
        <div>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{price} {category}</p>
            <h4>{description}</h4>
        </div>
    )
}

export default ProductDetails