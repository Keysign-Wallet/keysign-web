import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch, RouteProps } from 'react-router-dom';

import Layout from './containers/Layout';

import useApp from './hooks/app';
import { URLS } from './constants';
import { ApplicationStore } from './redux/types';

import About from './pages/About/About';
import Dashboard from './pages/Dashboard';
import Downloads from './pages/Downloads/Downloads';
import Faq from './pages/Faq/Faq';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Setup from './pages/Setup';
import Signup from './pages/Signup/Signup';
import Loader from './components/common/Loader';
import './App.scss';

interface ProtectedRouteProps extends RouteProps {
  authenticated: boolean;
  to?: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ authenticated, to, ...rest }) =>
  // eslint-disable-next-line react/jsx-props-no-spreading
  authenticated ? <Route {...rest} /> : <Redirect to={to || URLS.login} />;

const App: FC = () => {
  const { isLoggedIn } = useSelector((state: ApplicationStore) => state.app);
  const { validating, validateUser } = useApp();

  useEffect(() => {
    validateUser();
  }, [validateUser]);

  return validating ? (
    <div className="App__page-loader">
      <Loader>Loading...</Loader>
    </div>
  ) : (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={URLS.about} component={About} />
          {/* <Route exact path={URLS.account} component={Account} /> */}
          {/* <Route exact path={URLS.authcheck} component={AuthCheck} /> */}
          <ProtectedRoute path={URLS.dashboard} component={Dashboard} authenticated={isLoggedIn} />
          {/* <Route exact path={URLS.documentation} component={Documentation} /> */}
          <Route exact path={URLS.downloads} component={Downloads} />
          <Route exact path={URLS.faq} component={Faq} />
          <Route exact path={URLS.login} component={Login} />
          <Route exact path={URLS.privacypolicy} component={PrivacyPolicy} />
          <Route exact path={URLS.setup} component={Setup} />
          <Route exact path={URLS.signup} component={Signup} />
          {/* <Route exact path={URLS.tos} component={Tos} /> */}
          <Route exact path={URLS.landing} component={Landing} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
