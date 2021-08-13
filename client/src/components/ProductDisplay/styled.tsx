import styled from "styled-components";
import colors from "../../assets/colors";
import { spaces, fontSize } from "../../assets/variables";
import { device } from "../../assets/variables";

export const Wrapper = styled.div`
  height: 212px;
  background-color: ${colors.white};
  display: flex;
`;

export const Thumbnail = styled.img`
  margin: ${spaces.short};
  width: 180px;
  height: 180px;
  cursor: pointer;
`;

export const Details = styled.div`
  padding: ${spaces.short} 0;
`;

export const Price = styled.p`
  font-size: ${fontSize.size24};
  margin-top: ${spaces.short};
  margin-bottom: ${spaces.medium};
`;

export const Condition = styled.p`
  font-size: 18px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const State = styled.p`
  margin-top: ${spaces.high};
  margin-right: ${spaces.high};
  margin-left: auto;
  font-size: 24px;
  font-size: ${fontSize.size12};
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
