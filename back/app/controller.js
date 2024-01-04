const form_model = require('./model');

// Create and Save new form data
exports.addOneForm = (req, res) => {
    const form_data = new form_model(req.body);
    try {
        form_data.save()
        .then(result => {
            if (result.length != 0) {
                res.status(201).send(result);
            } else {
                res.status(400).send('❎ Could not add the form data');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Retrieve all form data from the database
// exports.findAllForms = (req, res) => {
//     try {
//         form_model.find().then(result => {
//             if (result.length != 0) {
//                 res.status(200).send(result);
//             } else {
//                 res.status(204).send('❎ No form data to show');
//             }
//         });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };

// Find particular form data with an stir
exports.getOneForm = (req, res) => {
    try {
        form_model.findOne({ stir: req.params.stir }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(204).send('❎ Could not find the form data');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update particular form data by the stir in the request
exports.updateOneForm = (req, res) => {
    try {
        form_model.findOneAndUpdate({ stir: req.params.stir }, req.body, { new: true }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send('❎ No form data found to update');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete form data with the specified stir in the request
exports.deleteOneForm = (req, res) => {
    try {
        form_model.findOneAndDelete({ stir: req.params.stir }).then(result => {
            if (result.length != 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send('❎ No form data found to delete');
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// // Delete all form data from the database
// exports.deleteAllForms = (req, res) => {
//     try {
//         form_model.deleteMany().then(result => {
//             if (result.length != 0) {
//                 if (result.acknowledged === true) {
//                     res.status(200).send(result);
//                 }
//             } else {
//                 res.status(400).send('❎ Could not delete the form data');
//             }
//         });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };