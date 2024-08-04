const express = require("express");
// const { getPlaylists, addPlaylist, updatePlaylist, deletePlaylist, } = require("../controllers/playlistController");

// const { protect } = require("../middleware/authMiddleware");
// const router = express.Router();

// router.route("/").get(protect, getPlaylists).post(protect, addPlaylist);

// router .route("/:id") .put(protect, updatePlaylist) .delete(protect, deletePlaylist);

// module.exports = router;


const {
  getPlaylists,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("../controllers/playlistController");
 const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Remove `protect` middleware from the GET route
router.route("/").get(getPlaylists).post(protect, addPlaylist);

router
  .route("/:id")
  .put(protect, updatePlaylist)
  .delete(protect, deletePlaylist);

module.exports = router;