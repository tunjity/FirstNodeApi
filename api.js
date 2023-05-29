var addressTypesDb = require('./AddressTypes/adrepo');
var genderDb = require('./Gender/dboperations');
var Gender = require('./Gender/Gender');
var Address_Types = require('./AddressTypes/addresstypes');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});

//#region genders
router.route('/genders').get((request, response) => {
    genderDb.getOrders().then((data) => {
        response.json(data[0]);
    })
})

router.route('/genders/:id').get((request, response) => {
    genderDb.getOrder(request.params.id).then((data) => {
        response.json(data[0]);
    })
})

router.route('/genders').post((request, response) => {
    let order = { ...request.body }
    console.log(order);
    genderDb.addOrder(order).then(data => {
        response.status(201).json(data);
    })
})
//#endregion

//#region addresstypes
router.route('/addresstypes').get((request, response) => {
    addressTypesDb.gets().then((data) => {
        response.json(data[0]);
    })
})

router.route('/addresstypes/:id').get((request, response) => {
    if (request.params.id != "0") {
        addressTypesDb.get(request.params.id).then((data) => {
            response.json(data[0]);
        })
    }
    else {
        console.log(request.params.id);
        addressTypesDb.gets().then((data) => {
            response.json(data[0]);
        })
    }
})

router.route('/addresstypes').post((request, response) => {
    let order = { ...request.body }
    addressTypesDb.add(order).then(data => {
        response.status(200).json(data);
    })
})
//#endregion
var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);
