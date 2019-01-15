import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Col, Grid, Row } from 'react-bootstrap'
import loader from './assets/images/loading.svg'
import './App.css'
import ReposComponent from './components/repos/ReposComponent'
import UserSearch from './components/user-search/UserSearch'


@inject('reposStore')
@observer
class App extends Component {
  render() {
    const { reposStore } = this.props
    return (
      <Grid className="mt-5">
        <Row>
          <UserSearch />
          {
            reposStore.isLoading && <img src={loader} className="loader" alt="loading-spinner" />
          }
          {
            reposStore.userRepos.length ?
              <Col sm={12}>
                <ReposComponent />
              </Col>
              :
              null
          }
        </Row>
      </Grid>
    )
  }
}

export default App
