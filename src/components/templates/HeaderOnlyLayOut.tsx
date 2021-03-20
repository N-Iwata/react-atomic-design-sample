import React, { ReactNode } from "react";
import Header from "../atoms/layout/Header";

type Props = {
  children: ReactNode;
};

const HeaderOnlyLayOut: React.VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderOnlyLayOut;
