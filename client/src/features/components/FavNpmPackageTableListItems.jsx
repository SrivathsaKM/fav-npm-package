import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/favNpmPackage.module.scss';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';

import ConfirmationDialog from './../../shared_ui_components/ConfirmationDialog';

const FavNpmPackageTableListItems = ({ id, items, handleDeletePackage }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    handleDeletePackage(id);
    setOpen(false);
  };
  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component='th' scope='row'>
          {items.selectedPackageName}
        </TableCell>
        <TableCell component='th' scope='row'>
          {items.packageName}
        </TableCell>
        <TableCell component='th' scope='row'>
          {items.description}
        </TableCell>
        <TableCell align='right' className={styles.tableActions}>
          <Tooltip title='View' arrow>
            <IconButton className={styles.tableIcons} onClick={() => navigate(`/fav-npm-packages/details/${id}`)}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Edit' arrow>
            <IconButton className={styles.tableIcons} onClick={() => navigate(`/fav-npm-packages/edit/${id}`)}>
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title='Delete' arrow>
            <IconButton
              className={styles.tableIcons}
              onClick={() => {
                setOpen(true);
              }}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      {open && <ConfirmationDialog open={open} text='Delete Npm Package' subText='Are you sure you want to delete this npm package?' cancelBtnClass='outlinedBtn' successBtnClass='secondaryBtn' handleClose={() => setOpen(false)} handleDelete={handleDelete} />}
    </>
  );
};

export default FavNpmPackageTableListItems;
