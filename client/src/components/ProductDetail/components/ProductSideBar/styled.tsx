import styled from "styled-components";
import { spaces, fontSize } from "../../../../assets/variables";
import colors from "../../../../assets/colors";
import { device } from "../../../../assets/variables";

export const Title = styled.h1`
  font-size: ${fontSize.size24};
  fort-weight: bold;
  padding-bottom: ${spaces.medium};
`;

export const Price = styled.p`
  font-size: ${fontSize.size46};
  font-weight: 400;
  padding-bottom: ${spaces.medium};
  line-height: 1;
`;

export const Button = styled.button`
  background-color: ${colors.action};
  padding: 12px 100px;
  font-size: ${fontSize.size16};
  text-align: center;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding: 0 50px;
  padding-top: ${spaces.medium};

  @media ${device.tablet} {
    padding-right: ${spaces.medium};
    width: min-content;
    display: block;
  }
`;

export const Sold = styled.p`
  font-size: ${fontSize.size14};
  color: ${colors.grey1};
  padding-bottom: ${spaces.short};
  text-transform: capitalize;
`;

export const Decimals = styled.span`
  font-size: ${fontSize.size24};
  vertical-align: top;
`;
