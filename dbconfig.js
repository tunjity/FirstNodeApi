const  config = {
    user:  'Admin', // sql user
    password:  'K5?wh7l4##', //sql user password
    server:  '92.205.57.77', // if it does not work try- localhost
    database:  'EIRS',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }
  
  module.exports = config;