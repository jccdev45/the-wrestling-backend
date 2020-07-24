const { Router } = require("express");
const controllers = require("../controllers/wrestlers");

const router = Router();

router.get("/", controllers.getWrestlers);
router.get("/:id", controllers.getWrestler);
router.post("/", controllers.addWrestler);
router.patch("/:id", controllers.updateWrestler);
router.delete("/:id", controllers.deleteWrestler);

module.exports = router;
