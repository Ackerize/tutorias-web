const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

/* Registrar usuario */
module.exports.registrar = (req, res) => {
  const { name, email, password, userType } = req.body;

  const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
  const hash = bcrypt.hashSync(password, salt, null);

  const usuario = new Usuario({
    name,
    email,
    password: hash,
    userType: userType || "user",
  });

  usuario
    .save()
    .then((nuevoUsuario) => {
        const payload = {
            id: nuevoUsuario._id,
            userType: nuevoUsuario.userType,
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY);

        res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error al registrar usuario",
        err,
      });
    });
};

/* Login de los usuarios */

module.exports.login = (req, res) => {
    const { email, password } = req.body;

    Usuario.findOne({ email })
    .then((user) => {
        if (!user) {
            return res.status(401).json({
                message: "Usuario no encontrado",
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                message: "Email or password is wrong",
            });
        }

        const payload = {
            id: user._id,
            userType: user.userType,
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY);

        res.status(200).json({ token });
    })
}
