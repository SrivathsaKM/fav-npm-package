import React from 'react';
import styles from '../assets/styles/favNpmPackage.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTableScores = ({ data }) => {
  return (
    <TableContainer component={Paper} className={styles.scoresTableWrapper}>
      <Table sx={{ minWidth: 250 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Poularity</TableCell>
            <TableCell>Maintainance</TableCell>
            <TableCell>Search</TableCell>
            <TableCell>Final</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'></TableCell>
            <TableCell component='th' scope='row'>
              {data?.quality}
            </TableCell>
            <TableCell component='th' scope='row'>
              {data?.popularity}
            </TableCell>
            <TableCell component='th' scope='row'>
              {data?.maintenance}
            </TableCell>
            <TableCell component='th' scope='row'>
              {data?.searchScore}
            </TableCell>
            <TableCell component='th' scope='row'>
              {data?.final}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTableScores;
