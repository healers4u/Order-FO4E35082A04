import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/main';
import ROUTES from './routes';
import Doctors from '../pages/doctors';
import Pharmacy from '../pages/pharmacy';
import Diagnostics from '../pages/diagnostics';
import NotFound from '../pages/not-found';
import AboutUs from '../pages/about-us';
import Speciality from '../pages/speciality';

const NavigationContainer: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>
        <Route path={ROUTES.DOCTORS}>
          <Doctors />
        </Route>
        <Route path={ROUTES.PHARMACY}>
          <Pharmacy />
        </Route>
        <Route path={ROUTES.DIAGNOSTICS}>
          <Diagnostics />
        </Route>
        <Route path={ROUTES.ABOUT_US}>
          <AboutUs />
        </Route>
        <Route path={ROUTES.SPECIALITY}>
          <Speciality />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default NavigationContainer;
