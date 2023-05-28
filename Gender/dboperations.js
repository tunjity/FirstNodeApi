var  config = require('../dbconfig');
const  sql = require('mssql');

async  function  getOrders() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Gender");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  getOrder(productId) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * from Gender where GenderId = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  addOrder(order) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('GenderId', sql.Int, order.GenderId)
      .input('GenderName', sql.NVarChar, order.GenderName)
      .query("insert into Gender(GenderID,GenderName) values (@GenderId,@GenderName)");
     console.log(sql.query); 
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getOrders:  getOrders,
    getOrder:  getOrder,
    addOrder:  addOrder
  }