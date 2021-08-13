import styled from "styled-components";
import colors from "../../../../assets/colors";
import { spaces, fontSize } from "../../../../assets/variables";

export const Title = styled.h3`
  font-size: ${fontSize.size28};
  padding-bottom: ${spaces.medium};
`;

export const Text = styled.p`
  color: ${colors.grey2}
  font-size: ${fontSize.size16};
  padding-bottom: ${spaces.medium};
`;

export const Wrapper = styled.div`
  padding: 0 ${spaces.medium};
  width: 100%;
  max-width: 680px;
  margin-top: 100px;
`;
