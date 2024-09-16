import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  Button, 
  Separator, 
  ContainerBott, 
  ContentButtons, 
  StyledFooter,
  ContactSection,
  Form
} from './styles';
import X from '../../assets/aa.svg' 
import Linkedin from '../../assets/Image [css-1a2v9hb] (2).svg' 
import Instagram from '../../assets/Instagram.svg' 
import LogoFace from '../../assets/LogoFace.svg' 
import Lingua from '../../assets/Button [MuiButtonBase-root].svg' 


const FooterLogin: React.FC = () => {

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>Ágil, prático e fácil</FooterContent>
        <FooterContent>Descubra seu problema sem sair de casa</FooterContent>
        <a href="/Servico">
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
    <img src={Lingua} alt="pt-br" />
  </ContentButtons>
  
  <ContactSection>
    <h2>Fale Conosco</h2>
    <Form>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" placeholder="Seu Nome" required />

      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" name="email" placeholder="Seu E-mail" required />

      <label htmlFor="message">Mensagem:</label>
      <textarea id="message" name="message" placeholder="Sua Mensagem" required></textarea>

      <button type="submit">Enviar</button>
    </Form>
  
  </ContactSection>
  
</ContainerBott> 

<Separator />
</StyledFooter>



  );
};

export default FooterLogin;
