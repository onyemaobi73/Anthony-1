import React from "react";
import Logos from "../static/Logos";
import app from "../../assets/app.svg"
import styled from "styled-components";


const Logo = () => {
    return (
     <Container>
        <Logos src={app} />
    </Container>
    );
};

export default Logo;

const Container = styled.div`
 background-color: black;
 width: 100%;
 height: 60px;
 display: flex;
 justify-content: center;
 align-items: center;
`