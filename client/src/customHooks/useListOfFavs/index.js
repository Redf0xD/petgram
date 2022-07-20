import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
export const useFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })
  return { loading, error, data }
}
