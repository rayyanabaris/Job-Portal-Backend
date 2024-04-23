const router = require("express").Router();

const {
  getcandidateList,
  addcandidate,
  updatecandidate,
  deletecandidate,
  getcandidateById,
  getSearchcandidate,
  getfiltercandidateList,
} = require("../controller/CandidateCtrl");
const upload = require("../middlewares/uploadImage")

router.get("/all", getcandidateList);
router.get("/get/:id", getcandidateById);
router.post("/filter", getfiltercandidateList);
router.post("/add", upload.single('pdf'), addcandidate);
router.put("/update/:id", updatecandidate);
router.delete("/delete/:id", deletecandidate);
router.get("/search/:key", getSearchcandidate);



module.exports = router;
