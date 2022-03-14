import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 20px;
${mobile({padding: "10px"})};
`;

const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`;

const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
`;

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${props => props.type === "filled" && "none"};
 background-color: ${props => props.type === "filled" ? "black" : "transparent"};
 color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({display: "none"})};
`;

const TopText = styled.span`
 cursor: pointer;
 color: blue;
 margin: 0 10px;
`;

const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
${mobile({flexDirection: "column"})};

`;

const Info = styled.span`
 flex: 3;
`;

const Product = styled.div`
 display: flex;
 justify-content: space-between;
${mobile({flexDirection: "column"})};

`;

const ProductInfo = styled.div`
 flex:2;
 display: flex;
`;

const Image = styled.img`
 width: 200px;
`;

const Details = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 padding: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props=> props.color};
`;

const ProductSize = styled.span``;

const PricsInfo = styled.div`
 flex:1;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const ProductAmountContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 20px;
`;

const ProductAmount = styled.div`
 font-size: 24px;
 margin: 5px;
${mobile({margin: "5px 15px"})};

`;

const ProductPrice = styled.div`
 font-size: 30px;
 font-weight: 200;
${mobile({marginBottom: "20px"})};

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.span`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
 font-weight: 200;
`;

const SummaryItem = styled.div`
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
 font-weight: ${props => props.type === "total" && "500"};
 font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
 width: 100%;
 padding: 10px;
 background-color: black;
 color: white;
 font-weight: 600;
 cursor: pointer;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton >CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductInfo>
                                <Image src="https://cdn.cliqueinc.com/posts/290636/new-pant-trends-2021-290636-1607309167164-main.700x0c.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> DENIM PANTS</ProductName>
                                    <ProductId><b>ID:</b> 1234567890</ProductId>
                                    <ProductColor color="brown"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductInfo>
                            <PricsInfo>
                                <ProductAmountContainer>
                                    <Remove/>
                                        <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>R 599.00</ProductPrice>
                            </PricsInfo>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductInfo>
                                <Image src="https://www.cruisefashion.com/images/imgzoom/60/60094952_xxl.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> JACKET</ProductName>
                                    <ProductId><b>ID:</b> 1234567890</ProductId>
                                    <ProductColor color="darkblue"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductInfo>
                            <PricsInfo>
                                <ProductAmountContainer>
                                    <Remove/>
                                        <ProductAmount>1</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>R 799.00</ProductPrice>
                            </PricsInfo>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R 1299.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Delivery</SummaryItemText>
                            <SummaryItemPrice>R 490.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Delivery Discount</SummaryItemText>
                            <SummaryItemPrice>R -90.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R 1699.00</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
