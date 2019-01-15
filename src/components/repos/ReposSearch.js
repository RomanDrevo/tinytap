import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


@inject('reposStore')
@observer
class ReposSearch extends Component {
  render() {
    const { reposStore } = this.props
    return (
      <label htmlFor="repo-search">
        <h5>Search Repo by Name or Description</h5>
        <input
          id="repo-search"
          placeholder="Search Repo"
          className="search-bar"
          value={reposStore.search}
          onChange={reposStore.updateSearch}
        />
      </label>
    )
  }
}

export default ReposSearch
