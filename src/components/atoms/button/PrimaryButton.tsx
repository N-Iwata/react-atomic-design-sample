import React, { ReactNode } from "react";
import styled from "styled-components";

import BaseButton from "./BaseButton";

type Props = {
  children: ReactNode;
};

const SButton = styled(BaseButton)`
  background-color: #11baab;
`;

const PrimaryButton: React.VFC<Props> = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

export default PrimaryButton;
