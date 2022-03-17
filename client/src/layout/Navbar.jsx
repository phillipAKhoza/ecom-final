import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
height: 60px;
${mobile({height: "50px"})};
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0px"})};
`;
const First = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
 ${mobile({marginLeft: "5px"})};
`;

const Input = styled.input`
 border: none;
 ${mobile({width: "50px"})};
`;
const Middle = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
 font-weight: bold;
 ${mobile({fontSize: "18px"})};
`;

const Last = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent: "center", marginRight: "20px"})};
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})};
`;

const Navbar = () => {
    const qty = useSelector(state => state.cart.quantity);
   
    return (
        <Container>
            <Wrapper>
              <First>
                  <Language>EN</Language>
                  <SearchContainer>
                      <Input placeholder="Search"/>
                      <Search style={{color:"gray", fontSize:16}}/>
                  </SearchContainer>
              </First>
              <Middle>
                  <Logo>APK-Dev.</Logo>
              </Middle>
              <Last>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>SIGN IN</MenuItem>
                  <MenuItem>
                  <Badge badgeContent={qty} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                  </MenuItem>
              </Last>
            </Wrapper>
        </Container>
    )
}

export default Navbar
