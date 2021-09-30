import { HeaderComponent, Avatar } from './styles';
import Logo from '../../assets/marvel-logo.svg';

export function Header() {
    return (
        <HeaderComponent>
            <a href="/home"><img src={Logo} alt="Logo da Marvel" /></a>

            <div>
                <nav>
                    <a href="/home">Personagens</a>
                    <a href="">Filmes</a>
                    <a href="">HQs</a>
                </nav>
                <Avatar>
                    <img src="https://github.com/ecthon.png" alt="" />
                    <button>Sair</button>
                </Avatar>
            </div>
        </HeaderComponent>
    )
}
