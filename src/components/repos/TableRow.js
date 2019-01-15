import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'

@inject('reposStore')
@observer
class TableRow extends Component {
  render() {
    const { reposStore, repo } = this.props;
    return (
      <tr className="pointer" onClick={() => reposStore.getReadMeFile(repo.name)}>
        <td>{repo.name}</td>
      </tr>
    )
  }
}

export default TableRow
