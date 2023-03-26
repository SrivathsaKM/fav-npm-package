import React, { FC, ReactElement } from 'react';
import { Grid, Hidden } from '@mui/material';
import CustomButton from './CustomButton';
import NoFileFound from '../assets/images/no_file_found.svg';

const NoResult = ({ className, title, subtext, btnText, link, onClick }) => {
  return (
    <div className={className + ' noResultFound flexCentered'}>
      <Grid container direction='row' justifyContent='center' alignItems='center' className='contentRow textCenter'>
        <Grid item xs={12}>
          <img className='noStateImg' src={NoFileFound} alt='No state' />
          {title ? <h5 className='heading6'>{title}</h5> : null}
          <Hidden only={['xs', 'sm']}>
            {subtext ? <h6 className='noStateSubHeading'>{subtext}</h6> : null}
            {btnText ? (
              <p>
                <CustomButton type='button' className={'primaryBtn'} onClick={onClick}>
                  {btnText ? <span>{btnText}</span> : <span>+ Add New</span>}
                </CustomButton>
              </p>
            ) : null}
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};
export default NoResult;
