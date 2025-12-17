
const router = require('express').Router();

router.get('/', (req,res)=>{
  res.json({ balance: 100 });
});

module.exports = router;
