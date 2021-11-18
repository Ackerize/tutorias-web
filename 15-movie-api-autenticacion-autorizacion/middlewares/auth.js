const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    token = token.split(" ")[1];

    if (token === "null" || !token)
      return res.status(401).json({ message: "Unauthorized request" });

    let verifyUser = jwt.verify(token, process.env.SECRET_KEY);

    if (!verifyUser)
      return res.status(401).json({ message: "Unauthorized request" });

    req.user = verifyUser;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports.isUser = (req, res, next) => {
  if (req.user.userType == "user") {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.user.userType == "admin") {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};
