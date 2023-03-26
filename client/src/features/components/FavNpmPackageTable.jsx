import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/favNpmPackage.module.scss';
import { deleteFavNpmPackageForm, getAllFavNpmPackage } from '../apiServices';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FavNpmPackageTableListItems from './FavNpmPackageTableListItems';
import NoResult from '../../shared_ui_components/NoResult';
import CustomButton from '../../shared_ui_components/CustomButton';
import Shimmer from '../../shared_ui_components/Shimmer';

const FavNpmPackageTable = () => {
  const navigate = useNavigate();
  const [npmLists, setNpmlists] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllFavNpmPackage()
      .then((response) => {
        if (response.status === 200) {
          setNpmlists(response.data);
        }
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  const handleDeletePackage = (id) => {
    if (open) {
      deleteFavNpmPackageForm(id)
        .then((response) => {
          if (response.status === 200) {
            const updatedLists = npmLists.filter((item) => item._id !== id);
            setNpmlists(updatedLists);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className={styles.npmPackageWraaper}>
        <p className='heading3'>Welcome to Favourite NPM Package</p>
        {npmLists.length > 1 && (
          <div className={styles.npmPackageAddBtnWrapper}>
            <CustomButton className='primaryBtn' children='Add Fav' onClick={() => navigate('/fav-npm-packages/add')} />
          </div>
        )}
      </div>
      {loader ? (
        <Shimmer type='favList' />
      ) : npmLists.length == 0 ? (
        <NoResult title={`You don't have any favs yet. Please add`} btnText='Add Fav' onClick={() => navigate('/fav-npm-packages/add')} className={styles.noState} />
      ) : (
        <div className={styles.npmPackageTable}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Package Name</TableCell>
                  <TableCell>Package Category</TableCell>
                  <TableCell>Favourite Reason</TableCell>
                  <TableCell align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {npmLists.map((item) => {
                  return <FavNpmPackageTableListItems key={item._id} id={item._id} items={item} handleDeletePackage={handleDeletePackage} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default FavNpmPackageTable;
