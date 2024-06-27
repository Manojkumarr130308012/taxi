const router = require('express').Router();
const enquiryController = require('../controller/enquiry');


router.post('/add', async (req, res) => {
	res.send(await enquiryController.add(req.body));
});
router.get('/enquiry', async (req, res) => {
	res.send(await enquiryController.fetch(req.query.email));
});
router.get('/fetchlenquiry', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await enquiryController.fetchdata(req.query.id);
	res.send(response);
});
router.delete('/delete', async (req, res) => {
	const response = await enquiryController.delete(req.query.id);
	res.send(response);
});
router.put('/update', async (req, res) => {
	const response = await enquiryController.update(req.query.id, req.body);
	res.send(response);
});

module.exports = router;