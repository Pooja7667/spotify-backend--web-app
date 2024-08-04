const Song = require("../models/Song");

// Get all songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a song by ID
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a new song
exports.addSong = async (req, res) => {
  const { title, artist, album, genre, duration, url } = req.body;
  try {
    const song = await Song.create({
      title,
      artist,
      album,
      genre,
      duration,
      url,
    });
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a song
exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a song
exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
