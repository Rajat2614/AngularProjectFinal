const express = require("express");
const router = express.Router();
const checkAuth = require("./middleware/check-auth");
const PostController = require("./controllers/posts");
const extractFile = require("./middleware/file");

router.get("", PostController.getPosts);
router.get("/:id", PostController.getPost);
router.post("", checkAuth, extractFile);
router.delete("/:id", checkAuth, PostController.deletePost);
router.patch("/:id", checkAuth, extractFile, PostController.updatePost);

module.exports = router;
