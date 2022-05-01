const express = require("express");
const Parking = require("./models/parking");
const router = express.Router();

router.get("/parkings", async (req, res) => {
	const parkings = await Parking.find()
	res.send(parkings);
});

router.get("/parking/:id", async (req, res) => {
	try {
		const parking = await Parking.findOne({ _id: req.params.id })
		res.send(parking)
	} catch {
		res.status(404)
		res.send({ error: "Parking doesn't exist!" })
	}
});

router.post("/parking", async (req, res) => {
	const parking = new Parking({
        name: req.body.name,
		title: req.body.title,
		availableSlot: req.body.availableSlot,
		img: req.body.img 
	});
	await parking.save();
	res.send(parking);
});

router.patch("/parking/:id", async (req, res) => {
	try {
		const parking = await Parking.findOne({ _id: req.params.id })

		if (req.body.title) {
			parking.title = req.body.title
		}

		if (req.body.availableSlot) {
			parking.availableSlot = req.body.availableSlot
		}

        if (req.body.name) {
			parking.name = req.body.name
		}

		if (req.body.img) {
			parking.img = req.body.img
		}

		await parking.save()
		res.send(parking)
	} catch {
		res.status(404)
		res.send({ error: "Parking doesn't exist!" })
	}
});

router.delete("/parking/:id", async (req, res) => {
	try {
		await Parking.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Parking doesn't exist!" })
	}
});

module.exports = router;