import React from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 1000px;
  outline: none;
`;

const Input: React.VFC<Props> = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder}></SInput>;
};

export default Input;
