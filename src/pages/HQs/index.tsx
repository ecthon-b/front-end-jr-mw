import { Cards, ContainerCards, Container } from './styles'
import Thor from '../../assets/hq/thor.jpg';
import Surfista from '../../assets/hq/surfistap.jpg';
import Worigem from '../../assets/hq/origem.jpg';
import { Header } from '../../components/Header';

export function HQs() {
    return (
        <>
            <Header />
            <Container>
                <ContainerCards>
                    <Cards>
                        <img src={Thor} alt="HQ Thor" />
                        <div>
                            <h2>Thor: Vikings</h2>
                            <p>Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                    <Cards>
                        <img src={Surfista} alt="HQ Surfista Prateado" />
                        <div>
                            <h2>Surfista Prateado: Parábola</h2>
                            <p>O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                    <Cards>
                        <img src={Worigem} alt="HQ Wolverine Origem" />
                        <div>
                            <h2>Wolverine: Origens</h2>
                            <p>Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                </ContainerCards>
            </Container>
        </>
    )
}