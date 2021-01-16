import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';

import { URLS } from './constants';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login';
import Privacy from './pages/Privacy/Privacy';
import Register from './pages/Register/Register';
import Setup from './pages/Setup/Setup';
import Tos from './pages/Tos/Tos';
import Wallet from './pages/Wallet/Wallet';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={URLS.about} component={About} />
          <Route exact path={URLS.contact} component={Contact} />
          <Route exact path={URLS.faq} component={Faq} />
          <Route exact path={URLS.landing} component={Landing} />
          <Route exact path={URLS.login} component={Login} />
          <Route exact path={URLS.privacy} component={Privacy} />
          <Route exact path={URLS.register} component={Register} />
          <Route exact path={URLS.setup} component={Setup} />
          <Route exact path={URLS.tos} component={Tos} />
          <Route exact path={URLS.wallet} component={Wallet} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
