import axios from '../core/axios'

const baseURL = 'users'

export const fetchUsers = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

export const fetchUserById = async id => {
  const response = await axios.get(`${baseURL}/${id}`)
  return response.data
}