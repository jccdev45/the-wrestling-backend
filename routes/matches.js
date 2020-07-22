const { Router } = require("express");
const controllers = require("../controllers/matches");

const router = Router();

router.get("/matches", controllers.getMatches);
router.get("/matches/:id", controllers.getMatch);
router.post("/matches", controllers.addMatch);
router.put("/matches/:id", controllers.updateMatch);
router.delete("/matches/:id", controllers.deleteMatch);

module.exports = router;
