const router = require("express").Router(); 
const { Blogpost } = require("../../models");
const withAuth = require("../..utils/auth"); 

router.post("/", withAuth, async (req, res) => { 
    try { 
        const newBlogPost = await Blogpost.create({
            title: req.body.blogTitle,
            body: req.body.blogBody, 
            user_id: req.session.user_id, 
        });
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});