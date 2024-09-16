

import styled from "styled-components";

export const  StyledHeader = styled.header`
display: flex;
justify-content: center;
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
