const { User, Rol, Car } = require("../../database/database.js");
const encriptado = require("../../services/pass-encrip.js");

const users = async () => {
  const data = await User.findAll({
    attributes: ["idUser", "name", "lastName", "email"],
    include: [
      {
        model: Rol,
        attributes: ["name"],
      },
    ],
  });
  return data;
};

const createUser = async (name, lastName, email, password, rol, rut) => {
  //TODO VALIDAR QUE EL RUT NO EXISTA
  //TODO VALIDAR QUE EL EMAIL NO EXISTA
  //TODO VALIDAR QUE LA PATENTE NO EXISTA
  const data = await User.create(
    {
      name: name,
      lastName: lastName,
      email: email,
      password: encriptado(password),
      idRol: rol,
      rut: rut,
      car: {
        patent: "BBB-000",
        brand: "Sin Marca",
        model: "Sin Modelo",
      },
    },
    {
      include: [
        {
          model: Car,
          as: "car",
        },
      ],
    }
  );

  await data.save();

  const userCreated = await User.findOne({
    where: {
      email: data.email,
    },
  });

  return {
    idUser: userCreated.idUser,
    name: userCreated.name,
    lastName: userCreated.lastName,
    email: userCreated.email,
  };
};

const updateUser = async (id, email) => {
  const data = await User.update(
    {
      email: email,
    },
    {
      where: {
        idUser: id,
      },
    }
  );

  const userUpdated = await User.findOne({
    where: {
      idUser: id,
    },
  });

  return {
    idUser: userUpdated.idUser,
    name: userUpdated.name,
    lastName: userUpdated.lastName,
    email: userUpdated.email,
  };
};

module.exports = {
  users,
  createUser,
  updateUser,
};
