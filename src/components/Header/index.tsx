import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="ft money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}
