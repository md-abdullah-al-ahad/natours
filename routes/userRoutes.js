const express = require('express');
const app = express();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  checkBody,
} = require('../controllers/userController');
const userRouter = express.Router();

userRouter.route('/').get(checkBody, getAllUsers).post(checkBody, createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
