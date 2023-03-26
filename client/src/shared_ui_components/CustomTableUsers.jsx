import React from 'react';
import styles from '../assets/styles/favNpmPackage.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTableUsers = ({ data }) => {
  return (
    <TableContainer component={Paper} className={styles.publisherTableWrapper}>
      <Table sx={{ minWidth: 250 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, idx) => {
            return (
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={idx}>
                <TableCell component='th' scope='row'>
                  {idx + 1}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {item.username}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {item.email}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTableUsers;
