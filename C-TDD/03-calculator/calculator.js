const add = (str) =>
  !str ? 0 : str.split(",").reduce((p, c) => Number(p) + Number(c), 0);

module.exports = add;
