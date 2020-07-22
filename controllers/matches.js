const Match = require("../models/match");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const match = await Match.findById(id);
    if (match) {
      return res.json(match);
    }
    res.status(404).json({ message: "Match not found." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMatch = async (req, res) => {
  try {
    const match = await new Match(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMatch = async (req, res) => {
  const { id } = req.params;
  await Match.findByIdAndUpdate(id, req.body, { new: true }, (error, match) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!match) {
      return res.status(404).json({ message: "Match not found." });
    }
    res.status(200).json(match);
  });
};

const deleteMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Match.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Match deleted");
    }
    throw new Error("Match not found.");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMatches,
  getMatch,
  addMatch,
  updateMatch,
  deleteMatch,
};
