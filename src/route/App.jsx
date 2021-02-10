import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../page/Home'

import { Detail } from '../page/Detail'
// import { Detail } from '../page/Detail/Movie'
// import { Detail as DetailTv } from '../page/Detail/Tv'
// import { PersonDetail } from '../page/Detail/Person'

import { Search } from '../page/Search'
import { Error404 } from '../page/Error'
import Layout from '../layout'
export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Layout><Home {...props} /></Layout>} />
        <Route exact path="/movie/:id" render={(props) => <Layout><Detail type = {'movie'} {...props}/></Layout>} />
        <Route exact path="/person/:id" render={(props) => <Layout><Detail type = {'person'} {...props}/></Layout>} />
        <Route exact path="/tv/:id" render={(props) => <Layout><Detail type = {'tv'} {...props}/></Layout>} />
        <Route exact path="/search" render={(props) => <Layout><Search {...props}/></Layout>} />
        <Route render={(props) => <Layout><Error404 {...props} /></Layout>} />
      </Switch>
    </Router>
  )
}
