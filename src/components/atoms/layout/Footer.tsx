import React from "react";
import styled from "styled-components";

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer: React.VFC = () => {
  return <SFooter>&copy; Test Inc 2021</SFooter>;
};

export default Footer;
