
router.get('/lawyers', async (req, res) => {
    try {
      const lawyers = await Lawyer.find();
      res.status(200).json(lawyers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.get('/lawyers/:id', async (req, res) => {
    try {
      const lawyer = await Lawyer.findById(req.params.id);
      res.status(200).json(lawyer);
    } catch (err) {
      res.status(404).json({ error: 'Lawyer not found' });
    }
  });
  