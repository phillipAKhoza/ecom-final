import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NewsLetter from "../layout/NewsLetter";
import { mobile } from "../responsive";

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
    return (
        <Container>
            <Navbar/>
            <Announcement/>
                <Wrapper>
                    <ImageContainer>
                        <Image  src="https://cdn.cliqueinc.com/posts/290636/new-pant-trends-2021-290636-1607309167164-main.700x0c.jpg"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>DENIM PANTS</Title>
                        <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam id nulla pharetra, congue mi non, tristique enim.
                        Aliquam non ligula sit amet dolor pharetra maximus a a nunc.
                        Etiam nibh mauris, ultricies sit amet volutpat sed, gravida nec ante. 
                        Nullam vel convallis velit.Quisque sed augue vitae ex dictum dapibus.
                        </Desc>
                        <Price>R 600</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black"/>
                                <FilterColor color="darkblue"/>
                                <FilterColor color="gray"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>

                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product