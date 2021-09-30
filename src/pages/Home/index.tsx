import { Avatar, Cards, ContainerCards, Container, Header } from './styles'
import Logo from '../../assets/marvel-logo.svg';
import PostSpiderMan from '../../assets/post-spider-man.jpg';
import PostWandaMaximoff from '../../assets/wanda-maximoff.jpg';
import Thanos from '../../assets/thanos.jpg';

export function Home() {
    return (
        <>
            <Header>
                <a href=""><img src={Logo} alt="Logo da Marvel" /></a>

                <div>
                    <nav>
                        <a href="">Personagens</a>
                        <a href="">Filmes</a>
                        <a href="">HQs</a>
                    </nav>
                    <Avatar>
                        <img src="https://github.com/ecthon.png" alt="" />
                        <button>Sair</button>
                    </Avatar>
                </div>
            </Header>
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