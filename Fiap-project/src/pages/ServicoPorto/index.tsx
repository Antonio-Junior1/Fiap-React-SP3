import Footer from "../../components/Footer"
import { HeaderBasic } from "../../components/HeaderBasic"
import { MainContentServico } from "../../components/MainContenServico"
import { Container } from "../../styles"

const Servico = () => {
    return(
        <Container>      
            <HeaderBasic/>
            <MainContentServico/>
            <Footer/>
        </Container>
    ) 
}


export default Servico