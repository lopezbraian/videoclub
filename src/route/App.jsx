import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../page/Home'
import { Detail } from '../page/Detail/Movie'
import { Detail as DetailTv } from '../page/Detail/Tv'
import { Search } from '../page/Search'
import { Layout } from '../layout'
export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Layout><Home {...props} /></Layout>} />
        <Route exact path="/movie/:id" render={(props) => <Layout><Detail {...props}/></Layout>} />
        <Route exact path="/tv/:id" render={(props) => <Layout><DetailTv {...props}/></Layout>} />
        <Route exact path="/search" render={(props) => <Layout><Search {...props}/></Layout>} />
      </Switch>
    </Router>
  )
}
