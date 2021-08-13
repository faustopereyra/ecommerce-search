import styled from "styled-components";
import colors from "../../assets/colors";
import { device } from "../../assets/variables";

export const Wrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
