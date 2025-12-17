
const router = require('express').Router();

router.post('/create', (req,res)=>{
  res.json({ message:'Lifafa created (admin approval required)' });
});

router.post('/claim', (req,res)=>{
  res.json({ credited: 9.6, tax: 0.4 });
});

module.exports = router;
