import { styled } from "styled-components";

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


export const Main = styled.main`
  * {
    box-sizing: border-box;
    font-family: "IBM Plex Sans Hebrew", sans-serif;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-in-out;
  }

  html, body {
    height: 100%;
  }
`;

export const Hero = styled.div`
  background-color: #00A1FC;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  width: 30%;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Button = styled.button`
  font-weight: 500;
  padding: 16px 10px;
  width: 253px;
  height: 56px;
  display: flex;
  justify-content: center;
  border-radius: 999px;
  cursor: pointer;
  background-color: #ffff;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005f99;
  }
`;
export const StyledImage = styled.img.attrs((props) => ({
  src: props.src
}))`
width: 24px;
height: 24px;
`

