const { Car } = require("../../database/database");

const cars = async () => {
  return await Car.findAll();
}

const createCars = async (patent, brand, model) => {
  const data = await Car.create({
    patent: patent,
    brand: brand,
    model: model
  });
  await data.save();
  const carCreated = await Car.findOne({
    where: {
      idCar: data.idCar,
    },
  });
  return {
    idCar: carCreated.idCar,
    patent: carCreated.patent,
    brand: carCreated.brand,
    model: carCreated.model
  };
};

const updateCars = async (id, patent, brand, model) => {
  const data = await Car.update(
    {
      patent: patent,
      brand: brand,
      model: model
    },
    {
      where: {
        idCar: id,
      },
    }
  );
  return data;
}

const deleteCars = async (id) => {
  const data = await Car.destroy({
    where: {
      idCar: id,
    },
  });
  return data;
}

module.exports = {
  cars,
  createCars,
  updateCars,
  deleteCars
};
