import FavNpmPackage from './containers/FavNpmPackage';
import AddUpdateFavNpmpackageForm from './components/AddUpdateFavNpmpackageForm';
import NpmPackageDetailPage from './components/NpmPackageDetailPage';
import pageLayoutHoc from './../hoc/pageLayoutHoc';

const FavNpmPackagePage = pageLayoutHoc(FavNpmPackage);
const AddUpdateFavNpmpackageFormPage = pageLayoutHoc(AddUpdateFavNpmpackageForm);
const NpmPackageDetailsPage = pageLayoutHoc(NpmPackageDetailPage);

export const routes = [
  {
    path: '/fav-npm-packages',
    element: <FavNpmPackagePage />,
    key: 'home',
  },
  {
    path: '/fav-npm-packages/add',
    element: <AddUpdateFavNpmpackageFormPage />,
    key: 'add',
  },
  {
    path: '/fav-npm-packages/edit/:id',
    element: <AddUpdateFavNpmpackageFormPage />,
    key: 'update',
  },

  {
    path: '/fav-npm-packages/details/:id',
    element: <NpmPackageDetailsPage />,
    key: 'details',
  },
];
