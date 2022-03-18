import { Email, Facebook, Instagram, LinkedIn, LocalPhone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
 display: flex;
 ${mobile({flexDirection: "column"})};
`;

const First = styled.div`
 flex:1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0;
`;

const SocialContainer = styled.div`
 display: flex;
`;

const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: white;
 background-color: #${props=> props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
`;

const Middle = styled.div`
 flex:1;
 padding: 20px;
 ${mobile({display: "none"})};
`;

const Title = styled.h3`
 margin-bottom: 30px;
`;

const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`;

const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
`;


const Last = styled.div`
 flex:1;
 padding: 20px;

`;

const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`;

// const Payment = styled.img`
//  width: 60%;
// `;

const Footer = () => {
    return (
        <Container>
            <First>
                <Logo>APK-Dev.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget quam sed magna porta pharetra et eu eros. Morbi orci magna, vulputate non congue in, posuere quis velit. Cras euismod velit varius neque pharetra tristique. Proin sit amet urna ornare, accumsan eros ut, egestas erat. Integer interdum sem et sem egestas consectetur.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </First>
            <Middle>
                <Title>Usefule Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Middle>
            <Last>
                <Title>Contact Us</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    soshanguve-H , pretoria 0152.
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{marginRight:"10px"}}/>
                    +27 72 078 1237
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight:"10px"}}/>
                    phillipantonk@gmail.com
                </ContactItem>
                {/* <Payment src="https://www.classltd.com/wp-content/uploads/2020/05/class-payments.png"/> */}
            </Last>
        </Container>
    )
}

export default Footer
