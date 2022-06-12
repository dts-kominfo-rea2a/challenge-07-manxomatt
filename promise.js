const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const arr = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    return arr.filter(item => (item.hasil === emosi)).length;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
