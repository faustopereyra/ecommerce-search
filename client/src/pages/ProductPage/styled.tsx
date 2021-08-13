import styled from "styled-components";
import { spaces } from "../../assets/variables";
import { device } from "../../assets/variables";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: ${spaces.short};
  padding: 0 20px;

  @media ${device.laptop} {
    padding: 0;
  }
`;
