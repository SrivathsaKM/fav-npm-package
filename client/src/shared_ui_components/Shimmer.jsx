import { Skeleton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../assets/styles/favNpmPackage.module.scss';
import { Fragment } from 'react';

const Shimmer = ({ type }) => {
  return (
    <>
      {type === 'favList' && (
        <>
          <div className={styles.npmPackageTable}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Skeleton
                        variant='text'
                        width={120}
                        height={25}
                        style={{
                          display: 'block',
                          marginLeft: 4,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Skeleton
                        variant='text'
                        width={120}
                        height={25}
                        style={{
                          display: 'block',
                          marginLeft: 4,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Skeleton
                        variant='text'
                        width={120}
                        height={25}
                        style={{
                          display: 'block',
                          marginLeft: 4,
                        }}
                      />
                    </TableCell>
                    <TableCell align='right'>
                      <Skeleton
                        variant='text'
                        height={25}
                        style={{
                          display: 'block',
                          textAlign: 'right',
                          marginLeft: 80,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...Array(8)].map((item, key) => {
                    return (
                      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={key}>
                        <TableCell component='th' scope='row'>
                          <Skeleton
                            variant='text'
                            width={120}
                            height={25}
                            style={{
                              display: 'block',
                              marginLeft: 4,
                            }}
                          />
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          <Skeleton
                            variant='text'
                            width={120}
                            height={25}
                            style={{
                              display: 'block',
                              marginLeft: 4,
                            }}
                          />
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          <Skeleton
                            variant='text'
                            width={120}
                            height={25}
                            style={{
                              display: 'block',
                              marginLeft: 4,
                            }}
                          />
                        </TableCell>
                        <TableCell align='right'>
                          <Skeleton
                            variant='text'
                            height={25}
                            style={{
                              display: 'block',
                              textAlign: 'right',
                              marginLeft: 80,
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
      {type === 'editList' && (
        <>
          <div className={styles.dropdownResult + ' heading6'}>Results:</div>
          {[...Array(8)].map((_, idx) => {
            return (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '16px' }} key={idx}>
                <Skeleton variant='circular' width='32px' height='32px' />
                <Skeleton
                  variant='text'
                  width={200}
                  height={30}
                  style={{
                    display: 'block',
                    margin: '8px',
                  }}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Shimmer;
