import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CustomButton from './CustomButton';
import deletePackage from '../assets/images/deactivate_user.svg';
import comfirmBg from '../assets/images/comfirm_bg.svg';

const ConfirmationDialog = ({ open, text, subText, cancelBtnClass, successBtnClass, handleDelete, handleClose }) => {
  return (
    <p>
      <Dialog open={open} onClose={handleClose} aria-labelledby='scroll-dialog-title' className='confirmationDialog'>
        <DialogTitle className='dialogTop' id='scroll-dialog-title'>
          <img className='backgroundImage' src={comfirmBg} alt='bg' />
          <img className='logo' src={deletePackage} alt='' />
        </DialogTitle>
        <DialogContent className='dialogBottom'>
          <p className='heading3 headingText'>{text}</p>
          <p className='paragraph subText'>{subText}</p>
          <p className='btnWrapper'>
            <CustomButton children='Cancel' className={`${cancelBtnClass ? cancelBtnClass : 'outlinedBtn'}`} onClick={handleClose} type='button' />
            <CustomButton children='Delete' className={` ${successBtnClass ? successBtnClass : 'primaryBtn'}`} onClick={handleDelete} type='button' />
          </p>
        </DialogContent>
      </Dialog>
    </p>
  );
};
export default ConfirmationDialog;
