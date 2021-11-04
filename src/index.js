import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import http from 'http'

const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')

const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))

const typeDefs = `
    type Query{
        totalPosts: String!
    }
`
const resolvers = {
  Query: {
    totalPosts: () => 'Test',
  },
}
let apolloServer = null
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}
startServer()
const httpserver = http.createServer(app)

app.get('/rest', function (req, res) {
  res.json({ data: 'api working' })
})

const port = 4000

app.listen(port, function () {
  console.log(
    `server running on http://localhost:${port}${apolloServer.graphqlPath}`
  )
})
