import { fetchPostsByUserId } from './posts'
import { fetchUsers } from './users'

export async function *mergeUsersWithPosts() {
  const users = await fetchUsers()
  for (const user of users) {
    const { id } = user
    const posts = await fetchPostsByUserId({ id })
    yield {
      ...user,
      posts
    }
  }
}
