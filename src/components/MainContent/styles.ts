
import { styled } from 'styled-components';



export const StyledMain = styled.main`
  background-color: #00A1FC;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
`

export const StyledContent = styled.div`
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 200px 116px;
  
  
`


export const StyledSection = styled.div`
font-size: 50px;
font-weight: 600;
width: 592px;
min-height: 352px;
display: flex;
flex-direction: column;
text-align: start;

`
export const StyledSpan = styled.span`
font-size: small;
display: flex;
align-items: center;
color: black;
margin-top: 12px;
`
export const StyledImage = styled.img.attrs((props) => ({
    src: props.src
}))`
 width: 24px;
 height: 24px;
`

export const StyledPorto = styled.img.attrs((props) => ({
    src: props.src
}))`
 width: 25%;
 height: 25%;
 padding:0px 0px 120px 0px
`
export const StyledButton2 = styled.button`
font-weight: 500;
padding: 16px 10px;
width: 253px;
height: 56px;
align-items: center;
display: flex;
justify-content: center;
border-radius: 999px;
cursor: pointer;
background-color: #ffff;
transition: background-color 0.3s; 

`



