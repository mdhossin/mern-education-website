const { uploadAvatar } = require("../controller/uploadController");
const uploadImage = require("../middleware/uploadImage");
const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/upload_avatar", uploadImage, auth, uploadAvatar);

module.exports = router;
