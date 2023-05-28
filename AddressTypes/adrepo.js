var  config = require('../dbconfig');
const  sql = require('mssql');

async  function  gets() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Address_Types");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  get(productId) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * from Address_Types where AddressTypeID = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  add(order) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('GenderId', sql.Int, order.GenderId)
      .input('GenderName', sql.NVarChar, order.GenderName)
      .execute('InsertOrders');
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    gets:  gets,
    get:  get,
    add:  add
  }