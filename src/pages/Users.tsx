import React from "react";
import styled from "styled-components";

import SearchInput from "../components/molecules/SearchInput";
import UserCard from "../components/organism/user/UserCard";
import { UserType } from "../types/UserTypes";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const users: UserType[] = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ねここ${val}`,
    image: "https://source.unsplash.com//IuJc2qh2TcA",
    mail: "test@sample.com",
    phone: "0x0-9999-9999",
    company: "test.inc",
    website: "https://test-website.com",
  };
});

const Users: React.VFC = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧ページです。</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

export default Users;
