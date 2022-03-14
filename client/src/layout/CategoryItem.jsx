import styled from "styled-components";
import { mobile } from "../responsive";
import {
    Link,
    BrowserRouter as Router
  } from "react-router-dom";

const Container = styled.div`
 flex: 1;
 margin: 3px;
 height: 70vh;
 position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: "35vh"})};
`;
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;
const Button = styled.button`
border: none;
padding: 20px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
${mobile({padding: "15px"})};
`;

const CategoryItem = ({category}) => {
    return (
        <Container>
            <Router>
            <Link to={`/products/${category.cat}`}>
            <Image src={category.img}/>
            <Info>
                <Title>{category.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
            </Router>
        </Container>
    )
}

export default CategoryItem
