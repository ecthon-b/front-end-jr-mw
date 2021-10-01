import { HeaderComponent, Avatar } from './styles';
import Logo from '../../assets/marvel-logo.svg';

export function Header() {
    return (
        <HeaderComponent>
            <a href="/"><img src={Logo} alt="Logo da Marvel" /></a>

            <div>
                <nav>
                    <a href="/">Personagens</a>
                    <a href="/filmes">Filmes</a>
                    <a href="/hqs">HQs</a>
                </nav>
                <Avatar>
                    <img src="https://github.com/ecthon.png" alt="Ecthon Almeida" />
                    <a href="/login"><button>Sair</button></a>
                </Avatar>
            </div>
        </HeaderComponent>
    )
}
