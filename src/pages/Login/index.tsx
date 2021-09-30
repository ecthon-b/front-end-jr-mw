import { Container, ConteinerForm, Content, CreateAccount, Inputs, Options } from './styles';
import Logo from '../../assets/marvel-logo.svg';

export function Login() {
    return (
        <Container>
            <Content>
                <ConteinerForm>
                    <img src={Logo} alt="" />
                    <h1>Bem-vindo(a) de volta!</h1>
                    <p>Acesse sua conta:</p>
                    <Inputs>
                        <input type="text" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                    </Inputs>

                    <Options>
                        <div>
                            <input type="checkbox" />
                            <span>Salvar login</span>
                        </div>
                        <a href="/">Esqueci a senha</a>
                    </Options>
                    <button>Entrar</button>
                    <CreateAccount>
                        <p>Ainda não tem o login? </p><span><a href="">Cadastre-se</a></span>
                    </CreateAccount>
                </ConteinerForm>
            </Content>
        </Container>
    );
}