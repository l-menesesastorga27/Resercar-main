const { Parking } = require("../../database/database");

const parkings = async () => {
  const data = await Parking.findAll({
    attributes: [
      "idParking",
      "bussinessName",
      "address",
      "pricePerHour",
      "capacity",
      "enabled",
    ],
  });
  return data;
};

const createParking = async (
  name,
  address,
  price,
  capacity,
  openingHour,
  closingHour,
  longitude,
  latitude
) => {
  const data = await Parking.create({
    bussinessName: name,
    address: address,
    pricePerHour: price,
    capacity: capacity,
    openingHour: openingHour,
    closingHour: closingHour,
    longitude: longitude,
    latitude: latitude,
  });
  await data.save();
  const parkingCreated = await Parking.findOne({
    where: {
      idParking: data.idParking,
    },
  });
  return {
    idParking: parkingCreated.idParking,
    name: parkingCreated.name,
    address: parkingCreated.address,
    price: parkingCreated.price,
    capacity: parkingCreated.capacity,
    available: parkingCreated.available,
  };
};

const updateParking = async (
  id,
  name,
  address,
  price,
  capacity,
  openingHour,
  closingHour
) => {
  const data = await Parking.update(
    {
      bussinessName: name,
      address: address,
      pricePerHour: price,
      capacity: capacity,
      openingHour: openingHour,
      closingHour: closingHour,
    },
    {
      where: {
        idParking: id,
      },
    }
  );
  const parkingUpdated = await Parking.findOne({
    where: {
      idParking: id,
    },
  });
  return {
    idParking: parkingUpdated.idParking,
    name: parkingUpdated.name,
    address: parkingUpdated.address,
    price: parkingUpdated.price,
    capacity: parkingUpdated.capacity,
    available: parkingUpdated.available,
  };
};

const takeParking = async (id) => {
  const parkingDisponible = await Parking.findOne({
    where: {
      idParking: id,
    },
  });

  if (parkingDisponible.capacity > 0) {
    const data = await Parking.update(
      {
        capacity: parkingDisponible.capacity - 1,
      },
      {
        where: {
          idParking: id,
        },
      }
    );
  } else {
    return {
      message: "NotOk",
    };
  }

  const parkingUpdated = await Parking.findOne({
    where: {
      idParking: id,
    },
  });
  return {
    idParking: parkingUpdated.idParking,
    name: parkingUpdated.name,
    address: parkingUpdated.address,
    price: parkingUpdated.price,
    capacity: parkingUpdated.capacity,
    available: parkingUpdated.available,
  };
};

const freeParking = async (id) => {
  const parkingDisponible = await Parking.findOne({
    where: {
      idParking: id,
    },
  });

  const data = await Parking.update(
    {
      capacity: parkingDisponible.capacity + 1,
    },
    {
      where: {
        idParking: id,
      },
    }
  );

  const parkingUpdated = await Parking.findOne({
    where: {
      idParking: id,
    },
  });
  return {
    idParking: parkingUpdated.idParking,
    name: parkingUpdated.name,
    address: parkingUpdated.address,
    price: parkingUpdated.price,
    capacity: parkingUpdated.capacity,
    available: parkingUpdated.available,
  };
};

module.exports = {
  parkings,
  createParking,
  updateParking,
  takeParking,
  freeParking,
};
