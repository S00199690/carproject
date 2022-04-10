const admin = require('firebase-admin');
admin.initializeApp();
const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const db = admin.database().ref('/car-project');

const getCarsFromDatabase = (res) => {
    let cars = [];
    return db.on(
        'value',
        snapshot => {
            snapshot.forEach(car => {
                cars.push({
                    id: car.key,
                    make: car.val().make,
                    model: car.val().model,
                    engine: car.val().engine,
                    transmission: car.val().transmission,
                    imageURL: car.val().imageURL
                });
            });
            res.status(200).json(cars);
        },
        error => {
            res.status(error.code).json({
                message: `Error: ${error.message}`
            });
        }
    );

};

exports.addCar = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not allowed'
            });
        }
        const make = req.query.make;
        const model = req.query.model;
        const engine = req.query.engine;
        const transmission = req.query.transmission;
        const imageURL = req.query.imageURL;
        db.push({ make, model, engine, transmission, imageURL });
        getCarsFromDatabase(res);
    });
});

exports.deleteCar = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'DELETE') {
            return res.status(401).json({
                message: 'Action not allowed'
            })
        }
        const id = req.query.id;

        db.child(id).remove();
        getCarsFromDatabase(res);
    });
});

exports.getCars = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        getCarsFromDatabase(res);
    });
});
