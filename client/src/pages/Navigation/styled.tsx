import styled from "styled-components";
import color from "../../assets/colors";
import { device } from "../../assets/variables";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 55px;
  margin: auto;
  padding: 0 20px;

  @media ${device.laptop} {
    padding: 0;
  }
`;

export const Container = styled.nav`
  width: 100vw;
  background: ${color.primary};
`;
