
import { useNavigate } from 'react-router-dom';
import { Button, Input, LoginBox, StyledContent, StyledMain, Title } from './styles';

export function MainContentLogin() {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        
        alert('Login feito com sucesso!');
        
        navigate('/');
    };

    return (
        <StyledMain>
            <StyledContent>
                <LoginBox>
                    <Title>Login</Title>
                    <form onSubmit={handleLogin}>
                        <Input type="text" placeholder="Usuário" />
                        <Input type="password" placeholder="Senha" />
                        <Button type="submit">Entrar</Button>
                    </form>
                </LoginBox>
            </StyledContent>
        </StyledMain>
    );
}
