import { HeaderBasic } from "../../components/HeaderBasic";
import { Container } from "../../styles";
import { MainContentLogin } from "../../components/MainContentLogin";
import FooterLogin from "../../components/FooterExtend";
import DevelopersSection from "../../components/Desenvolvedores/Index";


const Login = () => {
    return(
        <Container>      
            <HeaderBasic/>
            <MainContentLogin/>
            <DevelopersSection />
            <FooterLogin/>
        </Container>
    ) 
}


export default Login