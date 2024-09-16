import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  Button, 
  Separator, 
  ContainerBott, 
  ContentButtons, 
  StyledFooter
} from './styles';
import X from '../../assets/aa.svg' 
import Linkedin from '../../assets/Image [css-1a2v9hb] (2).svg' 
import Instagram from '../../assets/Instagram.svg' 
import LogoFace from '../../assets/LogoFace.svg' 
import Lingua from '../../assets/Button [MuiButtonBase-root].svg' 
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>Ágil, prático e fácil</FooterContent>
        <FooterContent>Descubra seu problema sem sair de casa</FooterContent>
        <a href="/servico">
          <Button>Conheça nosso serviço</Button>
        </a>
      </FooterContainer>

      <Separator />

      <ContainerBott>
        <ContentButtons>
          <img src={X} alt="X" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={LogoFace} alt="facebook" />
          <img src={Instagram} alt="Instagram" />
        </ContentButtons>
        <img src={Lingua} alt="pt-br" />
      </ContainerBott>
      <Separator />
    </StyledFooter>
  );
};

export default Footer;
