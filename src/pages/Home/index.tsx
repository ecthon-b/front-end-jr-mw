import {  Cards, ContainerCards, Container } from './styles'
import PostSpiderMan from '../../assets/post-spider-man.jpg';
import PostWandaMaximoff from '../../assets/wanda-maximoff.jpg';
import Thanos from '../../assets/thanos.jpg';
import { Header } from '../../components/Header';

export function Home() {
    return (
        <>
            <Header />
        <Container>
            <ContainerCards>
                <Cards>
                    <img src={PostSpiderMan} alt="" />
                    <div>
                        <h2>Homem-Aranha</h2>
                        <p>Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.</p>
                        <button>ver detalhes</button>
                    </div>
                </Cards>
                <Cards>
                    <img src={PostWandaMaximoff} alt="" />
                    <div>
                        <h2>Wanda Maximoff</h2>
                        <p>A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.</p>
                        <button>ver detalhes</button>
                    </div>
                </Cards>
                <Cards>
                    <img src={Thanos} alt="" />
                    <div>
                        <h2>Thanos</h2>
                        <p>A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.</p>
                        <button>ver detalhes</button>
                    </div>
                </Cards>
            </ContainerCards>
        </Container>
        </>
    )
}