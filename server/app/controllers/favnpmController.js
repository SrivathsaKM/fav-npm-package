import axios from 'axios';
import favNPMPackage from '../models/favnpmModel.js';
const favNpmController = {};

favNpmController.getSearchList = (req, res) => {
  const searchQuery = req.params.name;
  let _url = `https://api.npms.io/v2/search?q=${searchQuery}&size=${50}&from=${0}`;
  axios
    .get(_url)
    .then((response) => {
      res.json({
        data: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

favNpmController.getAllfavNpmPackageList = (req, res) => {
  favNPMPackage
    .find()
    .then((data) => {
      res.json({ data, status: 200, message: 'Successfully fetched all npm package lists' });
    })
    .catch((err) => {
      res.json({ err, status: 500, message: 'Something went wrong!' });
    });
};

favNpmController.getSingleFavNpmPackage = (req, res) => {
  const { id } = req.params;
  favNPMPackage
    .findById(id)
    .then((data) => {
      res.json({ data, status: 200, message: 'Fetched selected npm package detail' });
    })
    .catch((err) => {
      res.json({ err, status: 500, message: 'Something went wrong!' });
    });
};

favNpmController.addFavNpmPackage = (req, res) => {
  const body = req.body;
  favNPMPackage
    .findOne({ selectedPackageName: body.selectedPackageName })
    .then((list) => {
      if (list) {
        res.json({ status: 409, message: 'selected Package is already in your favourite list' });
      } else {
        const favNpm = new favNPMPackage(body);
        favNpm
          .save()
          .then((data) => {
            res.json({ data, status: 200, message: 'selected npm package added successfully' });
          })
          .catch((err) => {
            res.json({ err, status: 500, message: 'Something went wrong!' });
          });
      }
    })
    .catch((err) => {
      res.json({ err, status: 500, message: 'Something went wrong!' });
    });
};

favNpmController.updateFavNpmPackage = (req, res) => {
  const { id } = req.params;
  favNPMPackage
    .findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true })
    .then((data) => {
      res.json({ data, status: 200, message: 'updated the selected npm package detail' });
    })
    .catch((err) => {
      res.json({ err, status: 500, message: 'Something went wrong!' });
    });
};

favNpmController.removeFavNpmPackage = (req, res) => {
  const { id } = req.params;
  favNPMPackage
    .findByIdAndDelete(id)
    .then((data) => {
      res.json({ data, status: 200, message: 'successfully removed npm package details' });
    })
    .catch((err) => {
      res.json({ err, status: 500, message: 'Something went wrong!' });
    });
};

export default favNpmController;
