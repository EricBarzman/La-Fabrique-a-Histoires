const express = require("express");

// Controllers
const userController = require("./controllers/userController");
const themeController = require("./controllers/themeController");
const storyController = require("./controllers/storyController");
const levelController = require("./controllers/levelController");
const blockController = require("./controllers/blockController");
const savedStoryController = require("./controllers/savedStoryController");
const authController = require("./controllers/authController");

// Middlewares
const verifyTokenMiddleware = require("./middlewares/verifyTokenMiddleware");
const verifyAdminMiddleware = require("./middlewares/verifyAdminMiddleware");
const multerMiddleware = require('./middlewares/multerMiddleware');

const router = express.Router();


// Admin debug GET ALL users
router.get("/admin/users", verifyAdminMiddleware, userController.getAllUsers);

// Users
router.get("/users", verifyTokenMiddleware, userController.getOneUser);
router.patch("/users", verifyTokenMiddleware, userController.modifyUser);
router.delete("/users", verifyTokenMiddleware, userController.deleteUser);

// Upload avatar
router.post('/profile-upload-single', verifyTokenMiddleware, multerMiddleware, userController.changeAvatarPath)


// Login
router.post("/users", authController.userSignIn);
router.post("/login", authController.userLogIn);


// Saved stories
router.get("/users/saved_stories", verifyTokenMiddleware, savedStoryController.getUserSavedStories);
router.post("/users/saved_stories", verifyTokenMiddleware, savedStoryController.createUserSavedStory
);
router.delete("/users/saved_stories", verifyTokenMiddleware, savedStoryController.deleteAllUserSavedStories);

router.get("/users/saved_stories/:id", verifyTokenMiddleware, savedStoryController.getOneUserSavedStory);
router.patch("/users/saved_stories/:id", verifyTokenMiddleware, savedStoryController.modifyUserSavedStory);
router.delete("/users/saved_stories/:id", verifyTokenMiddleware, savedStoryController.deleteOneUserSavedStory);

// Stories
router.get("/stories", storyController.getAllStories);
router.post("/stories", verifyAdminMiddleware, storyController.createStory);

router.get("/stories/:id", storyController.getOneStory);
router.patch("/stories/:id", verifyAdminMiddleware, storyController.modifyStory);
router.delete("/stories/:id", verifyAdminMiddleware, storyController.deleteStory);

router.get(
  "/stories/levels/:id1/themes/:id2",
  storyController.getStoriesByLevelAndTheme
);

// Blocks
router.get("/blocks", blockController.getAllBlocks);
router.post("/blocks", verifyAdminMiddleware, blockController.createBlock);

router.get("/blocks/:id", blockController.getOneBlock);
router.patch("/blocks/:id", verifyAdminMiddleware, blockController.modifyBlock);
router.delete("/blocks/:id", verifyAdminMiddleware, blockController.deleteBlock);

// Levels
router.get("/levels", levelController.getAllLevels);
router.post("/levels", verifyAdminMiddleware, levelController.createLevel);

router.get("/levels/:id", levelController.getOneLevel);
router.patch("/levels/:id", verifyAdminMiddleware, levelController.modifyLevel);
router.delete("/levels/:id", verifyAdminMiddleware, levelController.deleteLevel);

// Themes
router.get("/themes", themeController.getAllThemes);
router.post("/themes", verifyAdminMiddleware, themeController.createTheme);

router.get("/themes/:id", themeController.getOneTheme);
router.patch("/themes/:id", verifyAdminMiddleware, themeController.modifyTheme);
router.delete("/themes/:id", verifyAdminMiddleware, themeController.deleteTheme);


module.exports = router;
