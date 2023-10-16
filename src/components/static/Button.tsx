import React from "react"
import styled from "styled-components"

interface iButton{
    title?: string;
    cc?: string;
    bg?: string;
    b?: string;
}

const Button: React.FC<iButton> = ({title, bg, cc, b }) => {
    return ( 
    <div>
        <Container bg={bg!} cc={cc!} b={b!}>
            <Main>{title}</Main>
        </Container>
    </div>
    );
};

export default Button;

const Main = styled.div`
font-size: 15px;

`;

const Container= styled.div<{
    bg: string;
    cc: string;
    b: string;
    }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    background-color: ${({bg}) => bg};
    color: ${({cc}) => cc};
    border: ${({b}) => (b ? "1px solid silver":"")};
    border-radius: 3px;
    cursor: pointer;
    transition: all 300ms;
    font-weight: bolder;
    text-transform: uppercase;
    margin: 0 10px;

    :hover {
        transform: scale(1.02);
    }

`;