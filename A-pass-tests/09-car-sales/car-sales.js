function sales(carsSold) {
  const result = {};
  carsSold.map((car) => {
    result[car.make]
      ? (result[car.make] += car.price)
      : (result[car.make] = car.price);
  });
  return result;
}

module.exports = sales;
