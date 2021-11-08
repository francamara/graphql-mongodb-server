const Post = require('./models/Post.model')

export const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find()
    },
  },
  // TODO: Variables not appearing in Apollo Sandbox
  Mutation: {
    // async createPost(root, { input }) {
    //   console.log(input)
    // },
    // createPost: (root, args, context) => Post.save(),
    createPost: () => {
      createPost: async (parent, args, context, info) => {
        const { title, description } = args
        const post = new Post({ title, markup })
        console.log(post)
        await post.save()
        return console.log(args)
      }
    },
  },
}
