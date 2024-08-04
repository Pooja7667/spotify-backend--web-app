
const Playlist = require("../models/Playlist");

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate("songs");
    res.json(playlists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addPlaylist = async (req, res) => {
  const { name, description, songs } = req.body;
  try {
    const playlist = await Playlist.create({
      name,
      description,
      user: req.user.id,
      songs,
    });
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    await Playlist.findByIdAndDelete(req.params.id);
    res.json({ message: "Playlist deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
