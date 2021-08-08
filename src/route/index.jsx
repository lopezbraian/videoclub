import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../page/Home";

import { TvDetail } from "../page/Detail/Tv";
import { MovieDetail } from "../page/Detail/Movie";
import { PersonDetail } from "../page/Detail/Person";

import Search from "../page/Search";
import { Error404 } from "../page/Error";
import Layout from "../layout";

export default function RoutesApp() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Layout>
              <Home {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path="/movie/:id"
          render={(props) => (
            <Layout>
              <MovieDetail {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path="/person/:id"
          render={(props) => (
            <Layout>
              <PersonDetail {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path="/tv/:id"
          render={(props) => (
            <Layout>
              <TvDetail {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path="/search"
          render={(props) => (
            <Layout>
              <Search {...props} />
            </Layout>
          )}
        />
        <Route
          render={(props) => (
            <Layout>
              <Error404 {...props} />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}
