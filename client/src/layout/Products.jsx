import { useEffect, useState } from "react";
import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
 padding: 20px;
 display: flex;
 flex-wrap: wrap;
 justify-content: spaces-between;
`;

const Products = ({category, filters, sort}) => {

    const [produts, setProducts] = useState([]);
    const [FilteredProduts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const data = await axios.get(category? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products");
                setProducts(data.data);
            }catch(error){

            }
        }
        getProducts();
    },[category]);

    useEffect(()=>{
        category && setFilteredProducts(
            produts.filter((item) =>
                Object.entries(filters).every(([key, value]) => 
                    item[key].includes(value)
                ),
            ),
        );
    },[produts,category,filters]);

    useEffect(()=>{
        if(sort === "newest"){
            setFilteredProducts((prev) =>
                [...prev].sort((a,b)=> a.createdAt - b.createdAt )
            );
        }else if(sort === "asc"){
            setFilteredProducts((prev) =>
                [...prev].sort((a,b)=> a.price - b.price )
            );
        }else {
            setFilteredProducts((prev) =>
                [...prev].sort((a,b)=> b.price - a.price )
            );
        }
    },[sort]);

    return (
        <Container>
            {  category?
                FilteredProduts.map(product =>(
                    <Product product={product} key={product._id}/>
                ))
                :
                produts.slice(0, 8).map(product =>(
                    <Product product={product} key={product._id}/>
                ))
            }
        </Container>
    )
}

export default Products
