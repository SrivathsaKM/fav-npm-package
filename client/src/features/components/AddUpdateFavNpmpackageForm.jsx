import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../assets/styles/favNpmPackage.module.scss';
import CustomInput from '../../shared_ui_components/CustomInput';
import CustomButton from '../../shared_ui_components/CustomButton';
import CustomRadioButton from '../../shared_ui_components/CustomRadioButton';
import { addFavNpmPackageForm, getSingleFavNpmPackage, searchFavNpmPackage, updateFavNpmPackageForm } from '../apiServices';
import { errorCodes } from '../../constants';
import { fieldValidation } from '../../utils/FormValidation';

import { Grid, IconButton, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NoResult from '../../shared_ui_components/NoResult';
import Shimmer from '../../shared_ui_components/Shimmer';
import ToastMessage from './../../shared_ui_components/ToastMessage';

const AddUpdateFavNpmpackageForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    packageName: '',
    description: '',
    selectedPackageName: '',
  });
  const [errorCode] = useState(errorCodes);
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);
  const [npmPackageOption, setNpmPackageOption] = useState([]);
  const [debounceValue, setDebounceValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [openToastMessage, setOpenToastMessage] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    severity: '',
    message: '',
  });

  useEffect(() => {
    if (id) {
      getSingleFavNpmPackage(id)
        .then((response) => {
          if (response.status === 200) {
            setFormData({
              ...formData,
              packageName: response.data.packageName,
              description: response.data.description,
              selectedPackageName: response.data.selectedPackageName,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleChange = (key, val) => {
    setFormData({
      ...formData,
      [key]: val,
    });
    setError({
      ...error,
      [key]: '',
    });
    if (key === 'packageName') {
      setError({
        ...error,
        selectedPackageName: '',
        packageName: '',
      });
    }
  };

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setDebounceValue(formData.packageName);
      setLoading(true);
    }, 500);
    return () => clearTimeout(subscribe);
  }, [formData.packageName]);

  useEffect(() => {
    if (debounceValue) {
      searchFavNpmPackage(debounceValue).then((response) => {
        if (response.data.results.length) {
          setNpmPackageOption(response.data.results);
        } else {
          setNpmPackageOption([]);
        }
        setLoading(false);
      });
    }
  }, [debounceValue]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validateNewInput = {
      packageName:
        errorCode['packageName'][
          fieldValidation({
            ...errorCodes['packageName_Obj'],
            fieldval: formData.packageName,
          })
        ],
      selectedPackageName:
        errorCode['selectedPackageName'][
          fieldValidation({
            ...errorCodes['selectedPackageName_Obj'],
            fieldval: formData.selectedPackageName,
          })
        ],
      description:
        errorCodes['description'][
          fieldValidation({
            ...errorCode['description_Obj'],
            fieldval: formData.description,
          })
        ],
    };

    if (Object.keys(validateNewInput).every((k) => validateNewInput[k] === '')) {
      setLoader(true);
      const selectedpackageDetail = npmPackageOption.find((item) => item.package.name === formData.selectedPackageName);
      const form_data = {
        packageName: formData.packageName,
        selectedPackageName: formData.selectedPackageName,
        description: formData.description,
        otherDetails: {
          authorName: selectedpackageDetail?.package?.author?.name,
          packageDescription: selectedpackageDetail?.package?.description,
          version: selectedpackageDetail?.package?.version,
          links: selectedpackageDetail?.package?.links,
          publishers: selectedpackageDetail?.package?.publisher,
          maintainers: selectedpackageDetail?.package?.maintainers,
          scoreDetail: {
            ...selectedpackageDetail?.score.detail,
            final: selectedpackageDetail?.score.final,
            searchScore: selectedpackageDetail?.searchScore,
          },
        },
      };

      if (id) {
        updateFavNpmPackageForm(id, form_data)
          .then((response) => {
            if (response.status === 200) {
              navigate('/fav-npm-packages');
            } else {
              setOpenToastMessage(true);
              setToastMessage({
                severity: 'error',
                message: response.message,
              });
            }
            setLoader(false);
          })
          .catch((err) => {
            console.log(err);
            setLoader(false);
          });
      } else {
        addFavNpmPackageForm(form_data)
          .then((response) => {
            if (response.status === 200) {
              navigate('/fav-npm-packages');
            } else {
              setOpenToastMessage(true);
              setToastMessage({
                severity: 'error',
                message: response.message,
              });
            }
            setLoader(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setError(validateNewInput);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (openToastMessage) {
      setTimeout(() => {
        setToastMessage({
          severity: '',
          message: '',
        });
        setOpenToastMessage(false);
      }, 5000);
    }
  }, [openToastMessage]);

  return (
    <>
      <div className={styles.formDetail}>
        <div className={styles.formHeaderTextWrapper}>
          <IconButton className={styles.arrowIcon} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <p className={styles.formHeaderText + ' heading3'}>{id ? 'Edit' : 'Add'} Your Favourite Npm Package</p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <CustomInput label='Package Name *' className={styles.inputBlk} placeholder='React js' noMargin='noMargin' value={formData.packageName} onChange={(e) => handleChange('packageName', e.target.value)} error={error.packageName} />
            </Grid>

            {formData.packageName ? (
              <Grid item md={12}>
                {loading ? (
                  <>
                    <div className={styles.loadingWrapper + ' paragraph'}>
                      <Shimmer type='editList' />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.dropdownResult + ' heading6'}>Results:</div>
                    <div className={styles.dropdownWrapper + ' paragraph'}>
                      {npmPackageOption.length ? (
                        npmPackageOption.map((item, idx) => {
                          return (
                            <Fragment key={idx}>
                              <CustomRadioButton value={item?.package.name} checked={formData.selectedPackageName === item?.package?.name} onChange={(e) => handleChange('selectedPackageName', e.target.value)} error={error.selectedPackageName} noMargin='noMargin' />
                            </Fragment>
                          );
                        })
                      ) : (
                        <NoResult title={`We didn't find any npm package that matched your search`} />
                      )}
                    </div>
                  </>
                )}
                {error && formData.packageName && <h6 className='errorMsg absolute'>{error.selectedPackageName}</h6>}
              </Grid>
            ) : null}

            <Grid item md={12}>
              <CustomInput label='Why this is your fav?' className={styles.inputBlk} multiline placeholder='Why this is your fav' noMargin='noMargin' value={formData.description} onChange={(e) => handleChange('description', e.target.value)} error={error.description} />
            </Grid>
          </Grid>

          <div className={styles.buttonWrapper}>
            <CustomButton className={`${loader ? ' primaryBtn disabledBtn' : 'primaryBtn'}`} children={`${id ? 'Edit' : 'Add'}`} type='submit' />
            <CustomButton className='outlinedBtn' children='Cancel' type='button' onClick={() => navigate(-1)} />
          </div>
        </form>
      </div>
      {openToastMessage && <ToastMessage toastMessage={toastMessage} open={openToastMessage} handleClose={() => setOpenToastMessage(false)} />}
    </>
  );
};
export default AddUpdateFavNpmpackageForm;
