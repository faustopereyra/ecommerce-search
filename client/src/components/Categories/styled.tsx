import styled from "styled-components";
import colors from "../../assets/colors";
import { spaces } from "../../assets/variables";

interface BreadCrumbProps {
  disabled: boolean;
}
export const Text = styled.p`
  font-size: 14px;
  color: ${colors.grey3};
  margin-bottom: ${spaces.short};
`;

export const BreadCrumbText = styled(Text)`
  display: flex;
`;

export const BreadCrumb = styled.span<BreadCrumbProps>`
  font-weight: ${({ disabled }) => (disabled ? "600" : "400")};
  &::after {
    content: "${({ disabled }) => (disabled ? "" : ">")}";
    margin: 0 5px;
  }
`;
