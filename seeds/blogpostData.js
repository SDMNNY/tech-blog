const { Blogpost } = require("../models");

const blogpostData = [
  {
    title: "Seed Test 1",
    body: "Blog Post 1",
    user_id: "1",
  },
  {
    title: "Seed Test 2",
    body: "Blog Post 2",
    user_id: "2",
  },
  {
    title: "Seed Test 3",
    body: "Blog Post 3",
    user_id: "3",
  },
  {
    title: "Seed Test 4",
    body: "Blog Post 4",
    user_id: "4",
  },
  {
    title: "Seed Test 5",
    body: "Blog Post 5",
    user_id: "5",
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;