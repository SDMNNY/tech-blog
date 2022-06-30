const router = require("express").Router(); 

const homepageRoutes = require("./homepageRoutes");
const dashboardRoutes = require("./dashboardRoutes"); 
const apiROutes = require("./api");

router.use("/", homepageRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes); 

module.exports = router; 
