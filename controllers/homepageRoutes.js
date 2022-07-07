const router = require("express").Router(); 
const {User, Blogpost, Comment } = require("../models");

router.get("/", async (req, res) => {
    try { 
        const blogpostData = await Blogpost.findAll ({
            include: [
                {
                    model: User,
                    attributes: { exclude: ["password"] },
                },
            ],
        });
        const blogposts = blogpostData.map((blogpost) => blogpost.get ({ plain: true })
        );

        res.render("allBlogPost", { blogposts, loggedIn: req.session.loggedIn});
    
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/blogpost/:id", async (req, res) => {
    try {
        const blogpostData = await Blogpost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: {exclude: ["password"] },
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: { exclude: ["password" ] },
                        },
                    ],
                },
            ],
        });

        const singeBlogPost = blogpostData.get({ plain: true });
        
        res.render("singleBlogPost", {
            singleBlogPost,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});