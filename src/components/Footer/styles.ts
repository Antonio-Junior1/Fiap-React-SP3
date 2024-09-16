import styled from 'styled-components';

export const StyledFooter = styled.footer`
background-color: black;
width: 100%;
min-height:350px;   
padding: 20px 0;
box-sizing: border-box; 

`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: #fff;
  gap: 50px;
  max-width: 1000px; 
  margin: 0 auto;
  height:100%;
  
`;

export const FooterContent = styled.span`
font-size: 28px;
text-align: center;
max-width: 600px;
margin: 10px 0;
line-height: 1.5;
`;

export const Button = styled.button`
font-weight: 500;
width: 260px;
height: 56px;
border-radius: 50px;
cursor: pointer;
background-color: #fff;
color: black;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0;
transition: background-color 0.3s;
`;

export const Separator = styled.div`
width: 100%;
border-top: 1px solid #292929;
`;

export const ContainerBott = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 50px 200px;
  box-sizing: border-box; 
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 20px;
`;


