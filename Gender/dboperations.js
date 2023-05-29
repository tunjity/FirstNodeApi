var config = require('../dbconfig');
const sql = require('mssql');
var returnObject =require('../ReturnObject');
async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from Gender");
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async function getOrder(productId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * from Gender where GenderId = @input_parameter");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool.request()
      .input('GenderName', sql.NVarChar, order.GenderName)
      .query(`INSERT INTO Gender(GenderName)VALUES(@GenderName)`);
    console.log(`INSERT INTO Gender(GGenderName)VALUES(@GenderName)`);
    return "Record Save Successfully";

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder
}