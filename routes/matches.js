const { Router } = require("express");
const controllers = require("../controllers/matches");

const router = Router();

router.get("/", controllers.getMatches);
router.get("/:id", controllers.getMatch);
router.post("/", controllers.addMatch);
router.patch("/:id", controllers.updateMatch);
router.delete("/:id", controllers.deleteMatch);

module.exports = router;
