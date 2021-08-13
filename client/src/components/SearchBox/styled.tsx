import styled from "styled-components";
import colors from "../../assets/colors";

export const SearchForm = styled.form`
  height: 35px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 2px;
  flex: auto;

  display: flex;
  justify-content: space-between;

  & svg {
    width: 15px;
    height: 15px;
    fill: ${colors.grey1};
    margin-top: 3px;
  }
`;

export const SearchInput = styled.input`
  padding-left: 10px;
  border: 0 rgba(0, 0, 0, 0.2);
  font-size: 18px; //Podria ser 16px...
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.grey3};
  }
`;

export const SearchButtom = styled.button`
  width: 35px;
  background-color: ${colors.grey4};
  border: none;
  cursor: pointer;
`;
