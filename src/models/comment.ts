import { types } from "mobx-state-tree";

import User from "./user";

const Comment = types.model("Comment", {
  id: types.number,
  createdAt: types.Date,
  updatedAt: types.Date,
  body: types.string,
  author: types.reference(User)
});

export default Comment;
