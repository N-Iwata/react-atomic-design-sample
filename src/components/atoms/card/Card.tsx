import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

const Card: React.VFC<Props> = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

export default Card;
