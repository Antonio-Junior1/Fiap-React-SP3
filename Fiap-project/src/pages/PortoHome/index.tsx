import  Footer  from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";
import { Container } from "../../styles";


const Home = () => {
    return(
        <Container>      
            <Header/>
            <MainContent/>                        
            <Footer/>
        </Container>
    ) 
}


export default Home