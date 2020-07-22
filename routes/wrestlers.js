const { Router } = require("express");
const controllers = require("../controllers/wrestlers");

const router = Router();

router.get("/wrestlers", controllers.getWrestlers);
router.get("/wrestlers/:id", controllers.getWrestler);
router.post("/wrestlers", controllers.addWrestler);
router.put("/wrestlers/:id", controllers.updateWrestler);
router.delete("wrestlers/:id", controllers.deleteWrestler);

module.exports = wrestler;
