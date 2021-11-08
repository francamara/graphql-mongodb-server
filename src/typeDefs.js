import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Post {
    id: ID
    title: String
    markup: String
  }

  type Query {
    getAllPosts: [Post]
  }

  input PostInput {
    title: String!
    markup: String!
  }

  type Mutation {
    createPost(post: PostInput): Post
  }
`
