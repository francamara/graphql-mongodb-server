# graphql-mongodb-server

This is a GraphQL API for a basic blog with MongoDB.

## Requirements

- Nodejs: v14 or higher
- A MongoDB cluster

## Main dependencies used

- GraphQL
- Apollo-server
- Express
- Mongoose

## How to run

First create a `.env` file from `.env.example` with all the requried keys.

Then install node dependencies

```
npm install
```

And finally run the server (only at dev mode at the moment)

```
npm run dev
```

### Still things TODO

- Fix the mutator
- Add security (JWT)
