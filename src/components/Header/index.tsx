import { HeaderComponent, Avatar } from './styles';
import Logo from '../../assets/marvel-logo.svg';

export function Header() {
    return (
        <HeaderComponent>
            <a href="/home"><img src={Logo} alt="Logo da Marvel" /></a>

            <div>
                <nav>
                    <a href="/home">Personagens</a>
                    <a href="/filmes">Filmes</a>
                    <a href="/hqs">HQs</a>
                </nav>
                <Avatar>
                    <img src="https://github.com/ecthon.png" alt="Ecthon Almeida" />
                    <a href="/"><button>Sair</button></a>
                </Avatar>
            </div>
        </HeaderComponent>
    )
}
