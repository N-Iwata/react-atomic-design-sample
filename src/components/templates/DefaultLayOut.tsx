import React, { ReactNode } from "react";
import Footer from "../atoms/layout/Footer";
import Header from "../atoms/layout/Header";

type Props = {
  children: ReactNode;
};

const DefaultLayOut: React.VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayOut;
