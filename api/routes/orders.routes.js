import express from "express";
import { isAuthenticated, hasRols } from "../auth";
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

router.post("/", isAuthenticated, (req, res) => {
  const { _id } = req.body;
  Orders.create({ ...req.body, user_id: _id }).then((data) =>
    res.status(201).send(data)
  );
});

router.put(
  "/:id",
  isAuthenticated,
  /*hasRol("user") hasRols(['admin', 'user'])*/ (req, res) => {
    Orders.findOneAndUpdate(req.params.id, req.body).then(() =>
      res.sendStatus(204)
    );
  }
);

router.delete("/:id", isAuthenticated, (req, res) => {
  Orders.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

export default router;
