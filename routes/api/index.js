const router = require("express").Router();
const deptroute = require("./department");
// const roleroute = require("./role");
// const employeeroute = require("./employee");

router.use("/department",deptroute);
// router.use("/role",roleroute);
// router.use("/employee",employeeroute);

module.exports = router;