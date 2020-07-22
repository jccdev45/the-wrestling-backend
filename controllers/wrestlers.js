const Wrestler = require("../models/wrestler");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const getWrestlers = async (req, res) => {
  try {
    const wrestleres = await Wrestler.find();
    res.json(wrestleres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWrestler = async (req, res) => {
  try {
    const { id } = req.params;
    const wrestler = await Wrestler.findById(id);
    if (wrestler) {
      return res.json(wrestler);
    }
    res.status(404).json({ message: "Wrestler not found." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addWrestler = async (req, res) => {
  try {
    const wrestler = await new Wrestler(req.body);
    await wrestler.save();
    res.status(201).json(wrestler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWrestler = async (req, res) => {
  const { id } = req.params;
  await Wrestler.findByIdAndUpdate(id, req.body, { new: true }, (error, wrestler) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!wrestler) {
      return res.status(404).json({ message: "Wrestler not found." });
    }
    res.status(200).json(wrestler);
  });
};

const deleteWrestler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Wrestler.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Wrestler deleted");
    }
    throw new Error("Wrestler not found.");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWrestlers,
  getWrestler,
  addWrestler,
  updateWrestler,
  deleteWrestler,
};
