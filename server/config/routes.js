import express from 'express';
const router = express.Router();
import favNpmController from './../app/controllers/favnpmController.js';

router.get('/api/search-list/:name/:size?/:from?/', favNpmController.getSearchList);
router.get('/api/list/', favNpmController.getAllfavNpmPackageList);
router.get('/api/list/:id/', favNpmController.getSingleFavNpmPackage);
router.post('/api/list/add/', favNpmController.addFavNpmPackage);
router.put('/api/list/update/:id/', favNpmController.updateFavNpmPackage);
router.delete('/api/list/delete/:id/', favNpmController.removeFavNpmPackage);

export default router;
