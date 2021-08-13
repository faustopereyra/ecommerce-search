import Logo from "../../components/Logo";
import SearchBox from "../../components/SearchBox";
import { Wrapper, Container } from "./styled";
const Navigation: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <SearchBox />
      </Wrapper>
    </Container>
  );
};

export default Navigation;
