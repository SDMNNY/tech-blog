const Blogpost = require("./Blogpost");
const Comment = require("./Comments");
const User = require("./User");


Blogpost.belongTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Blogpost.hasMany(Comment, {
    foreignKey: "blogpost_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Blogpost, {
    foreignKey: "blogpost_id",
    onDelete: "CASCADE"
});

User.hasMany(Blogpost, {
    foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

module.exports = {User, Blogpost, Comment}; 
