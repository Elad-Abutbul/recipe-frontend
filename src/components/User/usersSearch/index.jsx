import React, { useState } from "react";
import { Search } from "../../search";
import { UserFeed } from "../userFeed";

export const UsersSearch = () => {
  const [search, setSearch] = useState([]);
  const urlPath = `/auth/search/users`;
  return (
    <div>
      <Search urlPath={urlPath} setSearch={setSearch} mode="users" />
      <UserFeed users={search} />
    </div>
  );
};
