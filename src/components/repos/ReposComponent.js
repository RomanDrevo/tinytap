import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import ReposTable from './ReposTable'
import loader from '../../assets/images/loading.svg'


@inject('reposStore')
@observer
class ReposComponent extends Component {
  render() {
    const { reposStore } = this.props
    return (
      <Row className="mt-5">
        <Col sm={4}>
          <ReposTable />
        </Col>
        <Col sm={8}>
          <pre>
            {
              reposStore.isLoadingReadme &&
              <img src={loader} className="loader" alt="loading-spinner" />
            }

            {
              reposStore.readme ? reposStore.readme : null
            }
          </pre>
        </Col>
      </Row>
    )
  }
}

export default ReposComponent
