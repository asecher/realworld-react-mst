import { types } from "mobx-state-tree";

const User = types.model("User", {
  id: types.identifier,
  email: types.string,
  username: types.string,
  creadtedAt: types.Date,
  updatedAt: types.Date,
  bio: types.optional(types.string, null),
  image: types.optional(types.string, null),
  following: false
});

export default User;
