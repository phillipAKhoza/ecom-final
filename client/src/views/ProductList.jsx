import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import Navbar from '../layout/Navbar';
import NewsLetter from "../layout/NewsLetter";
import Products from "../layout/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
 margin: 20px;
`;

const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({margin: "0 20px", display: "flex", flexDirection:"column"})};
`;

const FilterText= styled.span`
 font-size: 20px;
 font-weight: 600;
 margin-right: 20px;
${mobile({marginRight: "0"})};
`;

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;
 ${mobile({margin: "10px 0px"})};
`;

const Option = styled.option`
 padding: 10px 0;
`;

const ProductList = () => {
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const filterChange =(e) =>{
        const filter = e.target.value;

        setFilter({
            ...filters,
         [e.target.name] : filter,
        });
    };
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={filterChange}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                        <Option>blue</Option>
                        <Option>red</Option>
                    </Select>
                    <Select name="size" onChange={filterChange}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
