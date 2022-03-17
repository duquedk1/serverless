import jwt from "jsonwebtoken";
import Users from "../models/Users";

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, "mi-secreto", (err, decoded) => {
    const { _id } = decoded;
    Users.findOne({ _id })
      .exec()
      .then((user) => {
        req.user = user;
        next();
      });
  });
};

const hasRoles = roles => (req, res, next) => {
    if (roles.indexOf(req.user.role) > -1){
    return next();
  }
  /*if (req.user.role === role) {
    return next();
  }*/
  res.sendStatus(403);
};

export default {isAuthenticated, hasRoles}
