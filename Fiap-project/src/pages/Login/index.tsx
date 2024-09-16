import { HeaderBasic } from "../../components/HeaderBasic";
import { Container } from "../../styles";
import { MainContentLogin } from "../../components/MainContentLogin";
import FooterLogin from "../../components/FooterExtend";


const Login = () => {
    return(
        <Container>      
            <HeaderBasic/>
            <MainContentLogin/>
            <FooterLogin/>
        </Container>
    ) 
}


export default Login