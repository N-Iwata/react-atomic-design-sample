import React, { ReactNode } from "react";
import styled from "styled-components";

import BaseButton from "./BaseButton";

type Props = {
  children: ReactNode;
};

const SButton = styled(BaseButton)`
  background-color: #f38af3;
`;

const SecondaryButton: React.VFC<Props> = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

export default SecondaryButton;
