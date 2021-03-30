import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch, RouteProps } from 'react-router-dom';

import Layout from './containers/Layout';

import useApp from './hooks/app';
import { URLS } from './constants';
import { ApplicationStore } from './redux/types';

import About from './pages/About/About';
import Account from './pages/Account/Account';
import AuthCheck from './pages/AuthCheck/AuthCheck';
import Browser from './pages/Browser/Browser';
import Client from './pages/Client/Client';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation/Documentation';
import Downloads from './pages/Downloads/Downloads';
import Faq from './pages/Faq/Faq';
import History from './pages/History/History';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login';
import Mobile from './pages/Mobile/Mobile';
import Privacy from './pages/Privacy/Privacy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Referral from './pages/Referral/Referral';
import Setup from './pages/Setup';
import Signup from './pages/Signup/Signup';
import Tos from './pages/Tos/Tos';
import Transactions from './pages/Transactions/Transactions';
import Wallet from './pages/Wallet/Wallet';
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
          <Route exact path={URLS.account} component={Account} />
          <Route exact path={URLS.authcheck} component={AuthCheck} />
          <Route exact path={URLS.browser} component={Browser} />
          <Route exact path={URLS.client} component={Client} />
          <Route exact path={URLS.contact} component={Contact} />
          <ProtectedRoute path={URLS.dashboard} component={Dashboard} authenticated={isLoggedIn} />
          <Route exact path={URLS.documentation} component={Documentation} />
          <Route exact path={URLS.downloads} component={Downloads} />
          <Route exact path={URLS.faq} component={Faq} />
          <Route exact path={URLS.history} component={History} />
          <Route exact path={URLS.landing} component={Landing} />
          <Route exact path={URLS.login} component={Login} />
          <Route exact path={URLS.mobile} component={Mobile} />
          <Route exact path={URLS.privacy} component={Privacy} />
          <Route exact path={URLS.privacypolicy} component={PrivacyPolicy} />
          <Route exact path={URLS.referral} component={Referral} />
          <Route exact path={URLS.setup} component={Setup} />
          <Route exact path={URLS.signup} component={Signup} />
          <Route exact path={URLS.tos} component={Tos} />
          <Route exact path={URLS.transactions} component={Transactions} />
          <Route exact path={URLS.wallet} component={Wallet} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
