import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './schema/'

const app = express()
const serverPort = 4000

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(serverPort, () => {
    console.log(`Listening on port ${serverPort}`)
})
