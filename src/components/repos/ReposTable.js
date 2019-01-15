import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Table } from 'react-bootstrap'
import TableRow from './TableRow'
import ReposSearch from './ReposSearch'

@inject('reposStore')
@observer
class ReposTable extends Component {
  render() {
    const { reposStore } = this.props

    return (
      <div className="flex-column flex">
        <ReposSearch />

        <Table>
          <thead>
            <tr>
              <th>Repo Name</th>
            </tr>
          </thead>
          <tbody>
            {
              reposStore.filteredRepos.map((repo) => <TableRow key={repo.id} repo={repo} />)
            }

          </tbody>
        </Table>
      </div>
    )
  }
}

export default ReposTable
