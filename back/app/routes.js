const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const controllers = require('./controller');

// parse requests of content-type - application/json
router.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json({ 
    agro_info: `It's working! 🙌`
  });
});

// router.get("/form/get/all", (req, res) => {
//   controllers.getAllForms(req, res);
// });
 
router.get("/form/:stir", (req, res) => {
  controllers.getOneForm(req, res);
});

router.post('/form', (req, res) => {
  controllers.addOneForm(req, res);
});

router.put("/form/:stir", (req, res) => {
  controllers.updateOneForm(req, res);
});

router.delete("/form/:stir", (req, res) => {
  controllers.deleteOneForm(req, res);
});

// router.post("/form/delete/all", (req, res) => {
//   controllers.deleteOneForm(req, res);
// });

module.exports = router;