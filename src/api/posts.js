import axios from '../core/axios'

const baseURL = 'posts'

export const fetchPostsByUserId = async ({ id }) => {
  const response = await axios.get(`${baseURL}?userId=${id}`)
  return response.data
}