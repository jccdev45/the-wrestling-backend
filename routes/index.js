const { Router } = require("express");
const matchesRouter = require("./matches");
const wrestlersRouter = require("./wrestlers");

const router = Router();

router.get("/", (req, res) => res.send("This is the root you mark"));

router.use("/", matchesRouter);
router.use("/wrestlers", wrestlersRouter);

module.exports = router;
