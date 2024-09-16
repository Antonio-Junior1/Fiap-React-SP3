

import styled from "styled-components";

export const  StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 22px 14px;
height:100%
`
export const StyledImage = styled.img.attrs((props) => ({
    src: props.src
}))`
width: 300px; 
height: 60px;
`
export const StyledButton = styled.button`

font-weight: 500;
padding: 16px 10px;
width: 109px;
height: 40px;
align-items: center;
display: flex;
justify-content: center;
border-radius: 999px;
cursor: pointer;
transition: background-color 0.3s; 

` 