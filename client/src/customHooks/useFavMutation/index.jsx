import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useFavMutation = id => {
  const [mutation] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  return [mutation]
}
