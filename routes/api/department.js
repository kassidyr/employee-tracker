const router = require("express").Router();
const DB = require("../../utils/DB");

router.get("/",function(req, res) {
    DB.getdepartment().then(DBresp => res.json(DBresp)).catch(err => res.json(err))
})

module.exports = router;