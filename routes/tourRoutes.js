const express = require('express');
const app = express();
const router = express.Router();
const {
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
  createTour,
  tourID,
} = require('../controllers/tourController');

router.param('id', tourID);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
