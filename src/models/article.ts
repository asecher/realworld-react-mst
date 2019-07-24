import { types } from "mobx-state-tree";

import User from "./user";

const Article = types.model("Article", {
  slug: types.identifier,
  title: types.string,
  description: types.string,
  body: types.string,
  createdAt: types.Date,
  updatedAt: types.Date,
  tagList: types.array(types.string),
  favorited: false,
  favoritesCount: 0,
  author: types.reference(User)
});

export default Article;
