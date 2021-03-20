import React from "react";
import styled from "styled-components";

import { UserType } from "../../../types/UserTypes";
import Card from "../../atoms/card/Card";
import UserIconWithName from "../../molecules/user/UserIconWithName";

type Props = {
  user: UserType;
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

const UserCard: React.VFC<Props> = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

export default UserCard;
