import { StyledButton, StyledHeader, StyledImage } from "./styles";
import Portologo from "../../assets/PortoLogo.png"

export function Header(){

    return(
        <StyledHeader>
            <StyledImage src= {Portologo} />
           <a href="/login"><StyledButton>log in</StyledButton> </a>
        </StyledHeader>
)



} 