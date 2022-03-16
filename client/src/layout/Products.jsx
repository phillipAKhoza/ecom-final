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
                const data = await axios.get("http://localhost:5000/api/products");
                console.log(data);
            }catch(error){

            }
        }
        getProducts();
    },[category]);

    return (
        <Container>
            {
                popularProducts.map(product =>(
                    <Product product={product} key={product.id}/>
                ))
            }
        </Container>
    )
}

export default Products
