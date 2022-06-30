const router = require("express").Router();
const { Blogpost } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const blogposts = blogpostData.map((blogpost) =>
        blogpost.get ({ plain: true })
        );
        res.render("allBlogPostLoggedIn", {
            layout: "dashboard",
            blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/edit/:id", withAuth, async (req, res) => {
    try{
        const blogpostData = await Blogpost.findByPk(req.params.id);
        const blogposts = blogpostData.get ({ plain: true });

        res.render 
    }
})