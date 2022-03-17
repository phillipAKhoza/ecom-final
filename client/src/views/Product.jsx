import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NewsLetter from "../layout/NewsLetter";
import { mobile } from "../responsive";
import {publicRequest} from "../requestAPI";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
${mobile({flexDirection: "column", padding: "10px"})};
`;

const ImageContainer = styled.div`
 flex: 1;
`;

const Image = styled.img`
 width: 100%;
 height: 90vh;
 object-fit: cover;
${mobile({height: "60vh"})};
`;

const InfoContainer = styled.div`
 flex: 1;
 padding: 0px 50px;
${mobile({padding: "10px"})};

`;

const Title = styled.h1`
 font-weight: 200;
`;

const Desc = styled.p`
 margin: 20px 0px;
`;

const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
`;

const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 width: 50%;
 margin: 30px 0px;
${mobile({width: "100%"})};

`;

const Filter = styled.div`
 display: flex;
 align-items: center;
`;

const FilterTitle = styled.span`
 font-size: 20px;
 font-weight: 200;
`;

const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};
 margin: 0px 5px;
 cursor: pointer;
`;

const FilterSize = styled.select`
 margin-left: 10px;
 padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 50%;
${mobile({width: "100%"})};
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 10px;
 border: 1px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 5px;
`;
const Button = styled.button`
 padding: 15px;
 border: 2px solid teal;
 background-color: white;
 cursor: pointer;
 font-weight: 500;
 transition: all 0.5s ease;
 &:hover{
    background-color: #008080;
    color: white;
 }
`;

const Product = () => {
    const location = useLocation();
    const prodID = location.pathname.split("/")[2];

    const [products, setPrdct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const  getProduct = async () =>{
            try {
                const dta = await publicRequest.get("/products/find/"+prodID);
                const data = dta.data;
                setPrdct(data);
               
            } catch (error) {
                
            };
        };
        getProduct();
    },[prodID]);

    const handleQty = (type) =>{
        if(type === "dec" && quantity !== 1){
            setQuantity(quantity-1);
        }else if(type === "inc" && quantity !== 15 ){
            setQuantity(quantity+1);
        }
    };

    const handleAddtoCart =()=>{
        dispatch(addProduct({ products ,quantity, totalPrice:products.price*quantity,}))
    };

    return (
        <Container>
            <Navbar/>
            <Announcement/>
                <Wrapper>
                    <ImageContainer>
                        <Image  src={products.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{products.title}</Title>
                        <Desc>
                        {products.desc}
                        </Desc>
                        <Price>R {products.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {products.color?.map((color)=>(

                                    <FilterColor key={color} color={color} onClick={()=> setColor(color)}/>

                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize onChange={(e)=> setSize(e.target.value)}>
                                {products.size?.map((size)=>(
                                    
                                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                    
                                ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>

                            <AmountContainer>
                                <Remove onClick={()=> handleQty("dec")}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={()=> handleQty("inc")}/>
                            </AmountContainer>
                            <Button onClick={handleAddtoCart}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
