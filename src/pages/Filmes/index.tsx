import { Cards, ContainerCards, Container } from './styles'
import IronMan from '../../assets/filmes/homemdeferro.jpg';
import IronMan2 from '../../assets/filmes/homemdeferro2.jpg';
import Thor from '../../assets/filmes/thor.jpg';

import { Header } from '../../components/Header';

export function Filmes() {
    return (
        <>
            <Header />
            <Container>
                <ContainerCards>
                    <Cards>
                        <img src={IronMan} alt="Homem de ferro" />
                        <div>
                            <h2>Homem de ferro</h2>
                            <p>Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                    <Cards>
                        <img src={IronMan2} alt="Homem de ferro 2" />
                        <div>
                            <h2>Homem de ferro 2</h2>
                            <p>O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                    <Cards>
                        <img src={Thor} alt="Filme Thor" />
                        <div>
                            <h2>Thor</h2>
                            <p>Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.</p>
                            <button>ver detalhes</button>
                        </div>
                    </Cards>
                </ContainerCards>
            </Container>
        </>
    )
}