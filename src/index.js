import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import colors from 'colors'
import http from 'http'

const dotenv = require('dotenv').config()

const app = express()

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

const port = process.env.PORT || 4000

const DBData = {
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PWD,
  cluster: process.env.MONGO_CLUSTER,
  dbname: process.env.MONGO_DBNAME,
}

// Logic: If connect to DB good then start server.

mongoose
  .connect(
    `mongodb+srv://${DBData.user}:${DBData.pwd}@${DBData.cluster}.c0twa.mongodb.net/${DBData.dbname}?retryWrites=true&w=majority`
  )
  .catch((error) => {
    console.error(error)
    return
  })
  .then(() => {
    console.log('📚 DB Connected succesfully!'.cyan)
  })
  .then(() => {
    app.listen(port, function () {
      console.log(
        `🚀 Server running on http://localhost:${port}${apolloServer.graphqlPath}`
          .cyan
      )
    })
  })
