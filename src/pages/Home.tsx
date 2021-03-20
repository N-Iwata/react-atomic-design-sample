import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  text-align: center;
`;

const Home: React.VFC = () => {
  return (
    <SContainer>
      <h2>TOPページです。</h2>
    </SContainer>
  );
};

export default Home;
