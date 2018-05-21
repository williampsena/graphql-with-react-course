import { GraphQLObjectType, GraphQLString } from 'graphql'
import axios from 'axios'
import config from '../config'
import UserType from './user'
import CompanyType from './company'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      async resolve (parentValue, args) {
        const res = await axios.get(`${config.remoteApiUrl}/users/${args.id}`)
        return res.data
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      async resolve (parentValue, args) {
        const res = await axios.get(
          `${config.remoteApiUrl}/companies/${args.id}`
        )
        return res.data
      }
    }
  }
})

export default RootQuery
