import { StyledButton2, StyledContent, StyledImage, StyledMain, StyledPorto, StyledSection, StyledSpan, } from "./styles";
import Check from "../../assets/check.png"
import PortoMain from "../../assets/PortoMain.png"

export function MainContent() {

    return(
        <StyledMain>
            <StyledContent>
                <StyledSection>
                <span> DESCUBRA O QUE ESTÁ ACONTECENDO COM SEU VEÍCULO </span>
                    <StyledSpan>
                        <StyledImage src= {Check} />
                        <p>Àgil pratico e facil</p>
                    </StyledSpan>
                    <StyledSpan>
                        <StyledImage src= {Check} />
                        <p>90% de satisfação do pelo serviço oferecido </p>
                    </StyledSpan>
                        <br /> 
                    <a href="/servico"><StyledButton2>Conheça nosso serviço</StyledButton2></a>
                </StyledSection>
                <StyledPorto src= {PortoMain}/>
            </StyledContent>  

                                    
  
  
        </StyledMain>

    )
}

