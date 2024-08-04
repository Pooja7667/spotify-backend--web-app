

const express = require("express");
const {
  getSongs,
  addSong,
  updateSong,
  deleteSong,
  getSongById, 
} = require("../controllers/songController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Publicly accessible routes
router.route("/").get(getSongs); // Get all songs without protection
router.route("/:id").get(getSongById); // Get a song by ID without protection

// Protected routes
router.route("/").post(protect, addSong); // Add a new song with protection
router
  .route("/:id")
  .put(protect, updateSong) // Update a song with protection
  .delete(protect, deleteSong); // Delete a song with protection

module.exports = router;


