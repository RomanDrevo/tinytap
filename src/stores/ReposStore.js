import { observable, action, runInAction, computed } from 'mobx'


export default class ReposStore {
  constructor(apiGateway) {
    this._apiGateway = apiGateway
  }

    @observable isLoading = false

    @observable isLoadingReadme = false

    @observable userRepos = []

    @observable loadReposError = null

    @observable search = ''

    @observable userSearch = ''

    @observable readme = null

    @observable loadReadmeError = null

    async getUserRepos(userName) {
      runInAction(() => {
        this.isLoading = true
      })

      try {
        if (userName) {
          this.userSearch = userName
          const repos = await this._apiGateway.getUserRepos(userName)
          runInAction(() => {
            this.userRepos = repos
          })
        } else {
          runInAction(() => {
            this.userRepos = []
            this.userSearch = ''
          })
        }
      } catch (e) {
        runInAction(() => {
          this.loadReposError = e
          this.userRepos = []
        })
        console.error(`Failed to load users repositories. error: ${e}`)
      } finally {
        runInAction(() => {
          this.isLoading = false
        })
      }
    }

    async getReadMeFile(repoName) {
      runInAction(() => {
        this.isLoadingReadme = true
      })
      try {
        const readme = await this._apiGateway.getReadMeFile(repoName)
        runInAction(() => {
          this.readme = readme.data
        })
      } catch (error) {
        runInAction(() => {
          this.loadReadmeError = error
          this.readme = 'No README found in this repository!'
        })

        console.error(`Failed to load README file. error: ${error}`)
      } finally {
        runInAction(() => {
          this.isLoadingReadme = false
        })
      }
    }

    @computed get filteredRepos() {
      return this.userRepos.filter((repo) => repo.url.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
                    repo.description && repo.description.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
    }

    @action
    updateSearch = (e) => {
      this.search = e.target.value
    }
}
