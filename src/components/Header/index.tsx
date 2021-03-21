import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  onHandleOpenNewTransationModal: () => void;
}

export function Header({ onHandleOpenNewTransationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="ft money" />
        <button onClick={onHandleOpenNewTransationModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
