
const router = require('express').Router();

router.post('/login', (req,res)=>{
  const { email, role } = req.body;
  req.session.user = { email, role };
  res.json({ success:true });
});

module.exports = router;
