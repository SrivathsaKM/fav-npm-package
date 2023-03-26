import React from 'react';

export default function pageLayoutHoc(HocComponent) {
  function PageLayoutHoc(props) {
    return (
      <div>
        <HocComponent {...props} />
      </div>
    );
  }
  return PageLayoutHoc;
}
