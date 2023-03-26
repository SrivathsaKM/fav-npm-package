import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/favNpmPackage.module.scss';
import CustomButton from '../../shared_ui_components/CustomButton';
import FavNpmPackageTable from './../components/FavNpmPackageTable';

import { Container } from '@mui/material';

const FavNpmPackage = (props) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg'>
      <FavNpmPackageTable />
    </Container>
  );
};

export default FavNpmPackage;
