import { Button, Hero, Main, ServiceItem, Services, StyledContent, StyledMain, } from "./styles";
import ServicoIMG from "../../assets/ServicoIMG.jpg"
export function MainContentServico() {

    return(
        <StyledMain>
            <StyledContent>
                    <Main>
                        <Hero>
                            <h1>Serviços Mecânicos</h1>
                            <p>
                            Confiabilidade, qualidade e agilidade em nossos serviços de manutenção e reparação de veículos tudo através da nossa IA.
                            </p>
                            <a href="/">
                            <Button>Consultar Serviço</Button>
                            </a>
                        </Hero>

                        <Services>
                            <ServiceItem>
                            <img
                                src= {ServicoIMG}
                                alt="Manutenção Preventiva"
                            />
                            <h3>Manutenção Preventiva</h3>
                            <p>
                                Garanta a durabilidade e o desempenho do seu veículo com nossos serviços de manutenção preventiva.
                            </p>
                            </ServiceItem>

                            <ServiceItem>
                            <img
                                src={ServicoIMG}
                                alt="Reparação de Motores"
                            />
                            <h3>Reparação de Motores</h3>
                            <p>
                                Contamos com especialistas em reparação de motores para resolver qualquer problema com eficiência.
                            </p>
                            </ServiceItem>

                            <ServiceItem>
                            <img
                                src={ServicoIMG}
                                alt="Troca de Peças"
                            />
                            <h3>Troca de Peças</h3>
                            <p>
                                Oferecemos a troca de peças originais e de qualidade para garantir a segurança e o desempenho do seu veículo.
                            </p>
                            </ServiceItem>
                        </Services>
                    </Main>     

            	</StyledContent>    
        </StyledMain>
    
    )
}
