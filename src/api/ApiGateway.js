import axios from 'axios'
import ApiError from './ApiError'
import Repo from '../models/Repo'

export default class ApiGateway {
  constructor(apiUrl) {
    axios.defaults.baseURL = `${apiUrl || ''}`
    axios.defaults.headers.common.Accept = 'application/vnd.github.VERSION.raw'
  }

  async getUserRepos(userName) {
    try {
      const res = await axios.get(`users/${userName}/repos?page=1&per_page=100`)
      return res.data.map((json) => Repo.reconstituteFrom(json))
    } catch (err) {
      this._handleApiError(err)
    }
  }

  async getReadMeFile(repo) {
    try {
      return await axios.get(`repos/RomanDrevo/${repo}/readme`)
    } catch (err) {
      this._handleApiError(err)
    }
  }


  _handleApiError(err) {
    if (axios.isCancel(err)) {
      throw new ApiError(`Api request cancelled. error: ${err.message}`)
    }

    throw new ApiError(`Api request failed. error: ${err.message}`)
  }
}
