const express = require("express");
const { getPost,
    deletePost,
    editPost,
    getPosts,
    addPost
} = require('../controllers/api-post-controller');

const router = express.Router();

//Get all posts
router.get('/api/posts', getPosts);
//Add new posts
router.post('/api/post', addPost);
//Get post by ID
router.get('/api/post/:id', getPost);
//Delete post by ID
router.delete('/api/post/:id', deletePost);
//Update post by ID
router.put ('/api/post/:id', editPost);

module.exports = router;