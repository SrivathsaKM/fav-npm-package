import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './assets/styles/app.scss';
import { routes } from './features/routes';
import ErrorBoundary from './utils/ErrorBoundary';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <ScrollToTop>
          <Routes>
            {[...routes].map(({ path, element, key }, index) => (
              <React.Fragment key={index}>
                <Route path={path} element={element} key={key} />
              </React.Fragment>
            ))}
            <Route path='/' element={<Navigate to='/fav-npm-packages' />} />
          </Routes>
        </ScrollToTop>
      </ErrorBoundary>
    </div>
  );
}

export default App;
