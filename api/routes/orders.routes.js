import express from "express"

import Orders from "../models/Orders";

const router = express.Router();

router.get("/", (req, res) => {
  Orders.find()
    .exec()
    .then((data) => res.status(200).send(data));
});

router.get("/:id", (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((data) => res.status(200).send(data));
});

router.post("/", (req, res) => {
  Orders.create(req.body).then((data) => res.status(201).send(data));
});

router.put("/:id", (req, res) => {
  Orders.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/:id", (req, res) => {
  Orders.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

export default router;
