const router = require('express').Router();
const postController = require('../controllers/centrecontroller');
router.get('/', centreController.readcentre);
router.post('/',  centreController.createcentre);
router.put('/:id', centreController.updatecentre);
router.delete('/:id', centreController.deletecentre);
module.exports = router;