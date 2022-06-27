const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  console.log(post);
  await Posts.create(post);
  res.json(post);
});

router.get("/:id", async (req,res) => {
   const postId = req.params.id;
   const post = await Posts.findByPK(id);
})

module.exports = router;
