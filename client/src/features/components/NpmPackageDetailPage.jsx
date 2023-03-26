import { Container, IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from '../../assets/styles/favNpmPackage.module.scss';
import CustomLink from '../../shared_ui_components/CustomLink';
import { getSingleFavNpmPackage } from '../apiServices';

import CustomTableUsers from '../../shared_ui_components/CustomTableUsers';
import CustomTableScores from '../../shared_ui_components/CustomTableScores';
import CustomButton from '../../shared_ui_components/CustomButton';

const NpmPackageDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [npmPackageDetails, setNpmPackageDetails] = useState({});

  useEffect(() => {
    if (id) {
      getSingleFavNpmPackage(id)
        .then((response) => {
          if (response.status === 200) {
            setNpmPackageDetails(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <Container maxWidth='lg'>
      {npmPackageDetails ? (
        <div className={styles.packageDetailWrapper}>
          <div className={styles.IconWrapper}>
            <Tooltip title='Back' arrow>
              <IconButton className={styles.arrowIcon} onClick={() => navigate(-1)}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>

            <p className=' heading2'>Npm Packge Details</p>
          </div>
          <p className=' heading3'>{npmPackageDetails.selectedPackageName}</p>
          <p className=' paragraph'>View registry info</p>
          <hr />
          <div className={styles.versionWrapper}>
            <p className=' heading5'>Current Version: </p>
            <p className=' paragraph'>{npmPackageDetails.otherDetails?.version}</p>
          </div>
          <div className={styles.AuthorWrapper}>
            <p className=' heading5'>Author Name: </p>
            <p className=' paragraph'>{npmPackageDetails.otherDetails?.authorName ?? 'N/A'}</p>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className=' heading5'>Description: </p>
            <p className={' paragraph'}>{npmPackageDetails.otherDetails?.packageDescription}.</p>
          </div>
          <div className={styles.linksWrapper}>
            <p className=' heading5'>Usefull Links: </p>
            <ul>
              <li className={styles.links}>
                <p className=' paragraph_semiBold'>1. Bugs: </p>
                <CustomLink to={npmPackageDetails.otherDetails?.links.bugs} className=' paragraph'>
                  {npmPackageDetails.otherDetails?.links?.bugs}
                </CustomLink>
              </li>
              <li className={styles.links}>
                <p className=' paragraph_semiBold'> 2. Home Page: </p>
                <CustomLink to={npmPackageDetails.otherDetails?.links?.homepage} className=' paragraph'>
                  {npmPackageDetails.otherDetails?.links?.homepage}
                </CustomLink>
              </li>
              <li className={styles.links}>
                <p className=' paragraph_semiBold'> 3. NPM: </p>
                <CustomLink to={npmPackageDetails.otherDetails?.links?.npm} className=' paragraph'>
                  {npmPackageDetails.otherDetails?.links?.npm}
                </CustomLink>
              </li>
              <li className={styles.links}>
                <p className=' paragraph_semiBold'> 4. Repository: </p>
                <CustomLink to={npmPackageDetails.otherDetails?.links?.repository} className=' paragraph'>
                  {npmPackageDetails.otherDetails?.links?.repository}
                </CustomLink>
              </li>
            </ul>
          </div>
          <div className={styles.tableWrapper}>
            <p className=' heading5'>Publishers Detail: </p>

            <CustomTableUsers data={npmPackageDetails?.otherDetails?.publishers} />
          </div>
          <div className={styles.tableWrapper}>
            <p className=' heading5'>Maintainers Detail: </p>
            <CustomTableUsers data={npmPackageDetails?.otherDetails?.maintainers} />
          </div>
          <div className={styles.tableWrapper}>
            <p className=' heading5'>Score Detail: </p>
            <CustomTableScores data={npmPackageDetails?.otherDetails?.scoreDetail} />
          </div>
          <div className='btnWrapper'>
            <CustomButton children='Back To Home' className='primaryBtn' onClick={() => navigate('/fav-npm-packages')} type='button' />
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default NpmPackageDetailPage;
