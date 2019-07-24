import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import { SignIn, SignUp } from "./auth";

const App: React.SFC = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Layout>
  </Router>
);

export default App;
