import React from "react"
import styled from "styled-components";
import video from "../../assets/vid.mp4"
import { AiOutlineSearch } from "react-icons/ai";
import {MdFavorite} from "react-icons/md"
import Button from "../components/static/Button";

const Hero = () => {
    return (
    <div>
        <Container>
            <Main >
                <Dava>
                <TextHolder>
                    <Text>
                        The best free stock photos, royalty 
                        free image & videos shared
                        by creators.
                    </Text>
                    <InputField>
                        <Icon1 />
                        <Input placeholder="Enter your search" />
                        <Icon2 />
                    </InputField>
                    <Br />
                    <div style = {{ display:"flex"}}>
                    <Button title="Get Started" bg="White" cc="black" 
                    b="" />
                    <Button title="Sign up" bg="darkorange" 
                    cc="White" b="" />
                    </div>
                </TextHolder>
             <Video src={video} autoPlay muted loop/>
             </Dava>
            </Main>
        </Container>
    </div>
    );
};

export default Hero;

const Br = styled.input`
margin: 10px 0;

`

const Input = styled.input`
flex: 1;
height: 95%;
outline: none;
border: 0;
font-size: 23px;

::placeholder{
    color: silver;
    margin-left: 10px;
}
`;

const Icon2 = styled(AiOutlineSearch)`
color: black;
font-size: 30px;
`;

const Icon1 = styled(MdFavorite)`
color: black;
font-size: 30px;
`;

const InputField = styled.div`
display: flex;
width: 500px;
height: 60px;
background-color: white;
border-radius: 3px;
margin-top: 5px;
align-items: center;
justify-content: space-between;
padding: 0 5px;


`

const Text = styled.div`
width: 500px;
font-size: 30px;
text-align: center;
`;

const Dava = styled.div`
position:absolute;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const TextHolder = styled.div`
color:white;
font-size: 40px;
z-index: 1;
display: flex;
flex-direction: column ;
align-items: center;
`;

const Main = styled.div`
  width: 100%;
    height: 100%;
    position: relative;
`;
const Video = styled.video`
     width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;

`;
const Container = styled.div`
     width: 100%;
    height: 700px;
    background-color: gray;


`;