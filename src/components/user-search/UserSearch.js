import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


@inject('reposStore')
@observer
class UserSearch extends Component {
  render() {
    const { reposStore } = this.props
    return (
      <label htmlFor="user-search">
        <h5>Search GitHub User</h5>
        <input
          id="user-search"
          placeholder="Search User"
          className="search-bar"
          value={reposStore.userSearch}
          onChange={(e) => reposStore.getUserRepos(e.target.value)}
        />
      </label>
    )
  }
}

export default UserSearch
