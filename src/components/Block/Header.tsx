import styled from "styled-components";
import {AiOutlineMenu, AiOutlineArrowUp,
     AiOutlineArrowDown} from "react-icons/ai"
import { useState } from "react";

const Header = () => {
const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover);
  };

  console.log(hover);
  
    return (   <div>
        <Container>
            <Main>
                <LinkData>
                <MyLink>Products</MyLink>
                <MyLink>Projects</MyLink>
                </LinkData>
                <Image>Image</Image>
                <LinkData>
                <MyLink>About</MyLink>
                <MyLink>Contact</MyLink>
                </LinkData>
                </Main>{" "}
             <Main2>
                <Image>Image</Image>
                <LinkData>
                <MyLink
                onMouseEnter={() =>{
                    onHover();
                }}
                onMouseLeave={() =>{
                    onHover();
                }}
                >
                    Products{hover? <AiOutlineArrowDown/>: 
                <AiOutlineArrowUp/>}{" "}
                 {hover ? <Div>box</Div> : null}
                </MyLink>
                <MyLink>Projects</MyLink>
                <MyLink>About</MyLink>
                <MyLink>Contact</MyLink>
                </LinkData>
                </Main2>
          <Icon/>
        </Container>
    </div>
    );
};

export default Header

const Div =styled.div`
    width: 150px;
    min-height:260px ;
    border-radius: 5px;
    background-color: darkorange;
    position: absolute;
    top: 60px;
    right: 230px;
    

`
const Icon = styled(AiOutlineMenu)`
display: none;

@media screen  and (max-width: 500px) {
display: flex;
color: white;
font-size: 30px;
margin-right: 20px;
}
`;


const Image = styled.div`
font-weight: 900;
font-size: 30px;
padding: 0 10px;
`;
const MyLink = styled.div`
margin: 0 10px;

`;
const LinkData = styled.div`
display: flex;

@media screen and (max-width: 500px) {
   display: none;
   color: white;
   width: 100%;
   height: 100%;
   justify-content: space-between;
   align-items: center;
}
`;
const Main2 = styled.div`
display: none;

@media screen and (max-width: 900px) {
   display: flex;
   color: white;
   width: 100%;
   height: 100%;
   justify-content: space-between;
   align-items: center;
}


`;

const Main = styled.div`
background-color: blue;
min-width: 900px;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 900px) {
 display: none;
}
`;
const Container = styled.div`
width: 100%;
height: 90px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;