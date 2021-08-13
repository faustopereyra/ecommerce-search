import logo from "../../assets/Logo_ML@2x.png";
import { useHistory } from "react-router";
import { Image } from "./styled";
const Logo: React.FC = () => {
  const history = useHistory();
  return (
    <Image onClick={() => history.push("/")} src={logo} alt="Mercado Libre" />
  );
};

export default Logo;
